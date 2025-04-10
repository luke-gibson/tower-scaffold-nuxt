<script setup lang="ts">
  import type { AboutData } from '~/types/about';
  const config = useRuntimeConfig();
  const route = useRoute()

  const { data } = await useAsyncData<AboutData>('about', () => 
    $fetch(`${config.public.strapiUrl}/api/about?pLevel`)
  );

  useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}${route.fullPath}`,
    },
  ],
})

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
    <DynamicContent :content="data.data.content"/>
  </div>
</template>