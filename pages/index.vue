<script setup lang="ts">
  import type { HomeData } from '~/types/home';
  const config = useRuntimeConfig();

  const { data } = await useAsyncData<HomeData>('home', () => 
    $fetch(`${config.public.strapiUrl}/api/home?pLevel`)
  );
</script>

<template>
  <div v-if="data">
    <DynamicContent :content="data.data.content"/>

    <div v-if="data.data.services?.length" class="services">
      <h2>Our Services</h2>
      <div class="service-list">
        <ServiceCard 
          v-for="service in data.data.services" 
          :key="service.id" 
          :title="service.title" 
          :slug="service.slug" 
          :image="service.image"
        />
      </div>
    </div>
  </div>
</template>