<script setup lang="ts">
  import type { AboutData } from '~/types/about';
  const config = useRuntimeConfig();

  const { data } = await useAsyncData<AboutData>('about', () => 
    $fetch(`${config.public.strapiUrl}/api/about?pLevel`)
  );
</script>

<template>
  <div v-if="data">
    <DynamicContent :content="data.data.content"/>
  </div>
</template>