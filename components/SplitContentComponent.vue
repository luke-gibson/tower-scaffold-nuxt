<script setup lang="ts">
  import type { RichTextBlocks } from '~/types/strapiRichText'
  import type { IImage } from '~/types/image'
  defineProps<{
    content?: RichTextBlocks[];
    image?: IImage;
    invert?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  }>();
</script>

<template>
  <section :class="['c-split-content', { 'c-split-content--invert': invert }, { 'o-section--top': spacingTop }, { 'o-section--bottom': spacingBottom }]">
    <LayoutContainer class="c-split-content__container">    
      <div class="c-split-content__image">
        <NuxtImg 
        class="c-split-content__image"
        :src="image?.formats.medium?.url" 
        :alt="image?.alternativeText" 
        :width="image?.formats.medium?.width"
        :height="image?.formats.medium?.height"
        lazy="true"
        loading="lazy" 
        format="webp,avif,jpg"
        />
      </div>
      <div class="c-split-content__content">
        <RichTextBlocks v-if="content" :data="content"/>
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
      border-radius: 2rem;

      img {
        width: 100%;
        height: auto;
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