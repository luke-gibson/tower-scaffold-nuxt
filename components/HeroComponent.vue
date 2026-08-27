<script setup lang="ts">
import type { IImage } from '@/types/image';
import type { RichTextBlocks } from '~/types/strapiRichText';
import { useCloudinary } from '~/composables/useCloudinary';

const props = defineProps<{
  content?: string | RichTextBlocks[];
  image?: IImage;
}>();

const transformedUrl = computed(() => useCloudinary(props.image?.url) || props.image?.url);
</script>

<template>
  <section class="c-hero">
    <div class="c-hero__media" v-if="image">
      <NuxtPicture
        :src="transformedUrl"
        :alt="image.alternativeText || ''"
        :width="image.formats?.large?.width || image.width"
        :height="image.formats?.large?.height || image.height"
        format="avif,webp,jpg"
        class="c-hero__picture"
      />
    </div>
    <div class="c-hero__overlay" aria-hidden="true" />
    <LayoutContainer class="c-hero__content" v-if="Array.isArray(content)">
      <RichTextBlocks :data="content" />
    </LayoutContainer>
  </section>
</template>

<style scoped lang="scss">
.c-hero {
  position: relative;
  height: 70vh;
  min-height: 48rem;
  max-height: 80rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__media {
    position: absolute;
    inset: 0;

    :deep(picture),
    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,20,137,0.88) 0%, rgba(0,9,59,0.70) 55%, rgba(0,9,59,0.35) 100%);
  }

  &__content {
    position: relative;
    z-index: 2;
    padding-top: 8rem;
    color: var(--white);

    :deep(h1), :deep(h2) {
      color: var(--white);
      font-size: clamp(3.2rem, 6vw, 6rem);
      line-height: 1.05;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      max-width: 22ch;
    }

    :deep(p) {
      color: rgba(255,255,255,0.78);
      max-width: 52rem;
      line-height: 1.7;
      margin-bottom: 0;
    }
  }
}
</style>
