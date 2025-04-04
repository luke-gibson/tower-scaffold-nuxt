<script setup lang="ts">
  import type { IImage } from '@/types/image';
  defineProps<{
    content?: string;
    image: IImage;
  }>();
</script>

<template>
  <section class="hero">
    <h2>{{ content }}</h2> 
    <NuxtImg 
      :src="image.url" 
      :alt="image.alternativeText" 
      />
  </section>
</template>

<style scoped>
  .hero {
    padding: 20px;
  }
  .hero img {
    max-width: 100%;
    height: auto;
  }
</style>