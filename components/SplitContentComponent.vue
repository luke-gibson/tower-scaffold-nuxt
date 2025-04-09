<script setup lang="ts">
  import type { RichTextBlocks } from '~/types/strapiRichText'
  import type { IImage } from '~/types/image'
  import { useCloudinary } from '~/composables/useCloudinary';

  const props = defineProps<{
    content?: string | RichTextBlocks[];
    image?: IImage;
    invert?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  }>();

  const transformedUrl = computed(() => useCloudinary(props.image?.formats.medium?.url));
</script>

<template>
  <section :class="['c-split-content', { 'c-split-content--invert': invert }, { 'o-section--top': spacingTop }, { 'o-section--bottom': spacingBottom }]">
    <LayoutContainer class="c-split-content__container">    
      <div class="c-split-content__image">
        <NuxtPicture 
          class="c-split-content__image"
          :src="transformedUrl" 
          :alt="image?.alternativeText" 
          :width="image?.formats.medium?.width"
          :height="image?.formats.medium?.height"
          lazy="true"
          loading="lazy" 
          format="webp,avif,jpg"
        />
      </div>
      <div class="c-split-content__content">
        <RichTextBlocks v-if="Array.isArray(content)" :data="content"/>
      </div>     
    </LayoutContainer>
  </section>
</template>

<style lang="scss">
  .c-split-content {  
    &__content {
      width: 100%;
      padding-right: 0;

      h1,h2,h3,h4,h5,h6 {
        color: var(--primary);
      }
    }

    &__image {
      width: 100%;    
      margin-bottom: 1rem;

      img {
        width: 100%;
        height: auto;
        border-radius: 2rem;
      }
    }    
  }

  @media (min-width: 768px) {
    .c-split-content {    
      $root: &;

      &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__content {          
        width: 50%;
        padding-left: 8rem;  
      }

      &__image {
        width: 50%;   
        margin-bottom: 0rem;

        img {
          width: 100%;
          height: auto;
        }
      }

      &--invert {
        #{$root} {
          &__image {
            order: 2;
          }

          &__content {
            padding-left: 0;
            padding-right: 8rem;
          }
        }
      }
    }
  }
</style>