<script setup lang="ts">
import type { HomeData } from '~/types/home';
const config = useRuntimeConfig();

const fetchUrl = `${config.public.strapiUrl}/api/home?pLevel`;
console.log('Fetch URL:', fetchUrl);

const { data } = await useAsyncData<HomeData>('home', () => 
  $fetch(fetchUrl)
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

console.log('data', data.value);
</script>

<template>
  <DynamicContent v-if="data" :content="data.data.content" />
  <ServicesGrid v-if="services.length" :services="services" />
</template>