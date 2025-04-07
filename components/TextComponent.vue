<script setup lang="ts">
  import type { RichTextBlocks } from '~/types/strapiRichText'
  defineProps<{
    content?: RichTextBlocks[];
    highlight?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  }>();
</script>

<template>
  <section :class="['c-text', { 'c-text--highlight': highlight }, { 'o-section--top': spacingTop }, { 'o-section--bottom': spacingBottom }]">
    <LayoutContainer>    
      <div class="c-text__content">
        <RichTextBlocks v-if="content" :data="content"/>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped lang="scss">
.c-text {
  &__content {
    width: 100%;
    max-width: 75rem;
  }

  &--highlight {
    background-color: var(--primary);
    color: var(--white);
    padding-top: var(--component-spacing);
    padding-bottom: var(--component-spacing);    
  }
} 
</style>