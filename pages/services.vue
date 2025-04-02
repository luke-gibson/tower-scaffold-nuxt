<script setup lang="ts">
import DynamicContent from '~/components/DynamicContent.vue';
import type { ServiceData } from '~/types/service';

const config = useRuntimeConfig();

const { data } = await useAsyncData('services', () => 
  $fetch<{ data: ServiceData[] }>(`${config.public.strapiUrl}/api/services`)
);
</script>

<template>
  
</template>