<script setup lang="ts">
  import type { RichTextBlocks } from '~/types/strapiRichText'
  defineProps<{
    content?: RichTextBlocks[];
  }>();
</script>

<template>
  <section class="c-text">
    <RichTextBlocks v-if="content" :data="content"/>
  </section>
</template>

<style scoped>
.c-text {
  margin-bottom: 2rem;
} 
</style>