<script setup lang="ts">
  import type { ContactData } from '~/types/contact';
  const config = useRuntimeConfig();

  const { data } = await useAsyncData<ContactData>('contact', () => 
    $fetch(`${config.public.strapiUrl}/api/contact?pLevel`)
  );
</script>

<template>
  <div v-if="data">
    <DynamicContent :content="data.data.content"/>
  </div>
</template>