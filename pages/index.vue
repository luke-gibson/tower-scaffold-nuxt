<script setup lang="ts">
import type { HomeData } from '~/types/home';
const config = useRuntimeConfig();

const { data } = await useAsyncData<HomeData>('home', () => 
  $fetch(`${config.public.strapiUrl}/api/home?pLevel`)
);

const services = computed(() => data.value?.data?.services ?? []);

useSeoMeta({
  title: data.value?.data.title || 'Default Title',
  ogTitle: data.value?.data.title || 'Default Title',
  description: data.value?.data.description || 'Default description',
  ogDescription: data.value?.data.description || 'Default description',
  ogImage: data.value?.data.image?.formats?.large?.url || data.value?.data.image?.url || 'https://example.com/default-image.png',
  twitterCard: 'summary_large_image',
});

const jsonLdData = computed(() => {
  const servicesList = services.value.map(service => ({
    '@type': 'Service',
    '@id': `${config.public.strapiUrl}/api/services/${service.slug}`,
    'name': service.title,
    'description': service.description,
    'image': service.image?.formats?.large?.url || service.image?.url,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': data.value?.data.title || 'Default Title',
    'description': data.value?.data.description || 'Default description',
    'url': `${config.public.strapiUrl}`,
    'image': data.value?.data.image?.formats?.large?.url || data.value?.data.image?.url,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${config.public.strapiUrl}`,
    },
    'services': servicesList,
  };
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdData.value),
    },
  ],
});
</script>

<template>
  <DynamicContent v-if="data" :content="data.data.content" />
  <ServicesGrid v-if="services.length" :services="services" />
</template>