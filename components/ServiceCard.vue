<script setup lang="ts">
    import type { IImage } from '@/types/image';
    defineProps<{ 
        title: string; 
        slug: string, 
        description: string;
        image: IImage 
    }>();
</script>

<template>
  <NuxtLink :to="`/services/${slug}`" class="service-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <NuxtImg
      :src="image?.url"
      :alt="image?.alternativeText"
      width="300"
      height="200"
      />
  </NuxtLink>
</template>

<style scoped>
.service-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: block;
  text-decoration: none;
  color: black;
  transition: 0.3s;
}

.service-card:hover {
  background: #f5f5f5;
}
</style>