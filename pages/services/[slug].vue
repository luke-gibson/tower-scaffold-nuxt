<script setup lang="ts">
import DynamicContent from '~/components/DynamicContent.vue';
import type { ServiceData } from '~/types/service';

const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData(`service-${route.params.slug}`, () => 
  $fetch<{ data: ServiceData }>(`${config.public.strapiUrl}/api/services?filters[slug][$eq]=${route.params.slug}&populate=content`)
);

</script>

<template>
  <div v-if="data?.data">
    <h1>{{ data.data.title }}</h1>
    <DynamicContent :content="data.data.content" />
  </div>
  <p v-else>Service not found.</p>
</template>