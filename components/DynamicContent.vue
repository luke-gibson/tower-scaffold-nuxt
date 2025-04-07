<script setup lang="ts">
import HeroComponent from '~/components/HeroComponent.vue';
import TextComponent from '~/components/TextComponent.vue';
import SplitContentComponent from '~/components/SplitContentComponent.vue';

import type { ContentBlock } from '~/types/contentBlock';

const props = defineProps<{ content: ContentBlock[] }>();

const getComponent = (item: ContentBlock) => {
  switch (item.__component) {
    case 'content.hero':
      return HeroComponent;
    case 'content.text':
      return TextComponent;
    case 'content.split-content':
      return SplitContentComponent;
    default:
      return null;
  }
};
</script>

<template>
  

      <component 
      v-for="item in content" :key="item.id"
        :is="getComponent(item)" 
        v-bind="item" 
      />

  
</template>