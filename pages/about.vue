<script setup lang="ts">
  import HeroComponent from '~/components/HeroComponent.vue';
  import TextComponent from '~/components/TextComponent.vue';
  import type { AboutData } from '~/types/about';
  const config = useRuntimeConfig();

  const { data } = await useAsyncData<AboutData>('about', () => 
    $fetch(`${config.public.strapiUrl}/api/about?pLevel`)
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
  </div>
</template>