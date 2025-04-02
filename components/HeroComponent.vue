<script setup lang="ts">
  import type { IImage } from '@/types/image';
  defineProps<{
    copy?: string;
    image: IImage;
  }>();
</script>

<template>
  <div class="hero">
    <h2>{{ copy }}</h2> 
    <NuxtImg 
      :src="image.url" 
      :alt="image.alternativeText" 
      />
  </div>
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