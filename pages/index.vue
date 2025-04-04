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
</script>

<template>
  <DynamicContent v-if="data" :content="data.data.content" />

  <section v-if="services.length" class="services">
  <h2>Our Services</h2>
  <div class="service-list">
    <ServiceCard 
      v-for="service in services" 
      :key="service.id" 
      :title="service.title" 
      :slug="service.slug" 
      :description="service.description"
      :image="service.image"
    />
  </div>
</section>
</template>