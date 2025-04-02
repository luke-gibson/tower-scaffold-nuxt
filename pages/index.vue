<script setup lang="ts">
  import HeroComponent from '~/components/HeroComponent.vue';
  import TextComponent from '~/components/TextComponent.vue';
  import type { HomeData } from '~/types/home';
  const config = useRuntimeConfig();

  const { data } = await useAsyncData<HomeData>('home', () => 
    $fetch(`${config.public.strapiUrl}/api/home?pLevel`)
  );

  const getComponent = (item: any) => {
    switch (item.__component) {
      case 'content.hero':
        return HeroComponent;
      case 'content.text':
        return TextComponent;
      default:
        return null;
    }
  };
</script>

<template>
  <div v-if="data">
    <div v-for="item in data.data.content" :key="item.id">
      <component 
        :is="getComponent(item)" 
        v-bind="item"
      />
    </div>

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