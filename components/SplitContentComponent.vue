<script setup lang="ts">
import type { RichTextBlocks } from '~/types/strapiRichText';
import type { IImage } from '~/types/image';
import { useCloudinary } from '~/composables/useCloudinary';

const props = defineProps<{
  content?: string | RichTextBlocks[];
  image?: IImage;
  invert?: boolean;
  spacingTop?: boolean;
  spacingBottom?: boolean;
}>();

const transformedUrl = computed(() => useCloudinary(props.image?.formats?.medium?.url) || props.image?.formats?.medium?.url || props.image?.url);
</script>

<template>
  <section :class="['c-split', { 'c-split--invert': invert }, { 'o-section--top': spacingTop }, { 'o-section--bottom': spacingBottom }]">
    <LayoutContainer class="c-split__inner">
      <div class="c-split__media">
        <NuxtPicture
          v-if="image"
          :src="transformedUrl"
          :alt="image.alternativeText || ''"
          :width="image.formats?.medium?.width || image.width"
          :height="image.formats?.medium?.height || image.height"
          format="avif,webp,jpg"
          class="c-split__img"
        />
      </div>
      <div class="c-split__content">
        <RichTextBlocks v-if="Array.isArray(content)" :data="content" />
      </div>
    </LayoutContainer>
  </section>
</template>

<style lang="scss">
.c-split {
  padding-top: var(--component-spacing);
  padding-bottom: var(--component-spacing);

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 8rem;
    }
  }

  &__media {
    border-radius: 0.4rem;
    overflow: hidden;
  }

  &__img {
    display: block;
    :deep(img) { width: 100%; height: auto; display: block; }
  }

  &__content {
    h1, h2, h3, h4, h5, h6 {
      color: var(--primary);
      text-transform: uppercase;
      margin-bottom: 1.6rem;
    }

    p {
      line-height: 1.8;
      color: #444;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    ul li {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;
      line-height: 1.5;
      color: #444;

      &::before {
        content: "";
        flex-shrink: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin-top: 0.3rem;
        background-color: var(--primary);
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }
    }

    a {
      color: var(--primary);
      text-underline-offset: 0.2em;
    }
  }

  &--invert {
    @media (min-width: 768px) {
      .c-split__media { order: 2; }
      .c-split__content { order: 1; }
    }
  }
}
</style>
