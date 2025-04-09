<script setup lang="ts">
  import type { IImage } from '@/types/image';
  import type { RichTextBlocks } from '~/types/strapiRichText';
  import { useCloudinary } from '~/composables/useCloudinary';

  const props = defineProps<{
    content?: string | RichTextBlocks[];
    image?: IImage;
  }>();

  const transformedUrl = computed(() => useCloudinary(props.image?.url));
</script>

<template>
  <section class="c-hero">    
    <figure class="c-hero__figure">
      <NuxtPicture 
        class="c-hero__image"
        :src="transformedUrl"
        :alt="image?.alternativeText" 
        :width="image?.width"
        :height="image?.height"
        format="avif,webp,jpg"
        />
        <figcaption 
          v-if="Array.isArray(content)"
          class="c-hero__caption">
          <RichTextBlocks :data="content"/>
        </figcaption>
    </figure>
  </section>
</template>

<style scoped lang="scss">
 .c-hero {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;

    &__figure {
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      pointer-events: none;

      &::before {
        position: absolute;
        content: "";
        inset: 0;
        height: 100%;
        width: 100%;
        background: rgb(0,20,137);
        background: radial-gradient(circle, rgba(0,20,137,1) 0%, rgba(0,9,59,1) 100%);
        opacity: .6;
      }
    }

    &__image {
      height: 100%;
      object-fit: cover;
      object-position: center center;
      width: 100%;
    }

    &__caption {
      position: absolute;
      top: 0;
      left: 1.2rem;
      right: 1.2rem;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;      
      color: var(--white);
      max-width: 75rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>