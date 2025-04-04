<script setup lang="ts">
import type { ServicesData } from '~/types/services';
const config = useRuntimeConfig();

const { data } = await useAsyncData<ServicesData>('services-page', () => 
  $fetch(`${config.public.strapiUrl}/api/services-page?pLevel`)
);

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
  <div v-if="data">
    <div v-if="data.data.services?.length" class="services">
      <h2>Our Services</h2>
      <div class="service-list">
        <ServiceCard 
          v-for="service in data.data.services" 
          :key="service.id" 
          :title="service.title" 
          :slug="service.slug" 
          :description="service.description"
          :image="service.image"
        />
      </div>
    </div>
  </div>
  <p v-else>Loading...</p>
</template>