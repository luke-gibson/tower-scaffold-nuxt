<script setup lang="ts">
    import type { IImage } from '@/types/image';
    defineProps<{ 
        title: string; 
        slug: string, 
        image: IImage 
    }>();
</script>

<template>
  <NuxtLink 
    :to="`/services/${slug}`" 
    class="c-card"
    :aria-label="`Service Card - ${title}`"
    >    
    <NuxtImg
      :src="image?.formats.medium?.url || image?.url"
      :alt="image?.alternativeText"
      :width="image?.formats.medium?.width || image?.width"
      :height="image?.formats.medium?.height || image?.height"
      class="c-card__image"      
      />
      <h3 class="c-card__title">{{ title }}</h3>
  </NuxtLink>
</template> 

<style scoped lang="scss">
  .c-card {
    width: 100%;
    height: 17.5rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    margin-top: 2rem;
    transition: transform 0.3s ease-in-out,
                box-shadow 0.3s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgb(0,0,0);
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7623643207282913) 100%);
    }

    &:hover,
    &:focus {
      transform: translateY(-.5rem);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }

    &:nth-child(3n) {
      margin-right: 0;
    }

    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;  
    }

    &__title {
      position: absolute;
      bottom: 1rem;
      left: 2.5rem;
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
      .c-card {
        width: calc(33.333% - 2rem);
        height: 35rem;
      }
  }
</style>