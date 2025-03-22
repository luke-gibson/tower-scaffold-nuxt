<script setup lang="ts">
    import type { IAbout } from '~/types/about';

    const { findOne } = useStrapi();

    const { data: aboutResponse } = await useAsyncData<IAbout | null>('about', async () => {
    return findOne<IAbout>('about', { populate: 'image' });
    });

    const about = computed<IAbout>(() => aboutResponse.value?.data || {} as IAbout);
</script>

<template>
  <div>
    <h1>{{ about.name }}</h1>
    <p>{{ about.description }}</p>

    <img v-if="about.image" :src="about.image.url || about.image.formats?.large?.url" :alt="about.image.alternativeText || 'About Image'" />
  </div>
</template>