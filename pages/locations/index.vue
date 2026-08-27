<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData('locations', () =>
  $fetch<{ data: Array<{ name: string; slug: string; county: string; title: string; description: string }> }>('/api/locations')
);

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}${route.fullPath}` }],
});

useSeoMeta({
  title: 'Scaffolding Locations Across Hampshire | Tower Scaffold + Safety Netting',
  ogTitle: 'Scaffolding Locations Across Hampshire | Tower Scaffold + Safety Netting',
  description: 'Tower Scaffold + Safety Netting provides expert scaffolding across Hampshire and West Sussex. Find your local scaffolding service — Portsmouth, Southampton, Waterlooville, Fareham and more.',
  ogDescription: 'Tower Scaffold + Safety Netting provides expert scaffolding across Hampshire and West Sussex. Find your local scaffolding service — Portsmouth, Southampton, Waterlooville, Fareham and more.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="c-locations">
    <section class="c-locations__hero">
      <LayoutContainer>
        <p class="c-locations__eyebrow">Where We Work</p>
        <h1 class="c-locations__title">Scaffolding Across<br>Hampshire &amp; West Sussex</h1>
        <p class="c-locations__intro">Tower Scaffold + Safety Netting serves homeowners, builders and businesses throughout the south coast. With over 20 years of experience, we bring the same high standard of workmanship to every project — wherever you are.</p>
      </LayoutContainer>
    </section>

    <section class="c-locations__grid-section">
      <LayoutContainer>
        <ul v-if="data" class="c-locations__grid">
          <li v-for="location in data.data" :key="location.slug">
            <NuxtLink :to="`/locations/${location.slug}`" class="c-location-card">
              <span class="c-location-card__number">{{ (data.data.indexOf(location) + 1).toString().padStart(2, '0') }}</span>
              <span class="c-location-card__name">{{ location.name }}</span>
              <span class="c-location-card__county">{{ location.county }}</span>
              <span class="c-location-card__arrow" aria-hidden="true">→</span>
            </NuxtLink>
          </li>
        </ul>
      </LayoutContainer>
    </section>

    <section class="c-locations__cta">
      <LayoutContainer>
        <div class="c-locations__cta-inner">
          <h2 class="c-locations__cta-heading">Don't see your area?</h2>
          <p class="c-locations__cta-text">We regularly travel beyond our core coverage area. Get in touch and we'll let you know if we can help.</p>
          <NuxtLink to="/contact" class="c-locations__cta-btn">Get a Free Quote</NuxtLink>
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>

<style scoped lang="scss">
.c-locations {
  &__hero {
    background-color: var(--primary);
    color: var(--white);
    padding-top: 8rem;
    padding-bottom: 8rem;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
    margin-bottom: -2rem;
  }

  &__eyebrow {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .3rem;
    opacity: 0.6;
    margin-bottom: 1rem;
  }

  &__title {
    color: var(--white);
    font-size: clamp(3.2rem, 6vw, 5.6rem);
    line-height: 1.05;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  &__intro {
    max-width: 52rem;
    opacity: 0.85;
    font-size: var(--font-size--body);
    margin-bottom: 0;
  }

  &__grid-section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  &__grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__cta {
    background-color: var(--primary);
    padding-top: 6rem;
    padding-bottom: 6rem;
    clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%);
    margin-top: -2rem;
  }

  &__cta-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__cta-heading {
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 0;
  }

  &__cta-text {
    color: var(--white);
    opacity: 0.85;
    max-width: 40rem;
    margin-bottom: 0;
  }

  &__cta-btn {
    display: inline-block;
    background-color: var(--white);
    color: var(--primary);
    text-decoration: none;
    padding: 1.4rem 3rem;
    text-transform: uppercase;
    font-size: var(--font-size--body);
    letter-spacing: .1rem;
    white-space: nowrap;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover,
    &:focus {
      background-color: var(--secondary);
      color: var(--white);
    }
  }
}

.c-location-card {
  display: grid;
  grid-template-columns: 5rem 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  column-gap: 1.6rem;
  padding: 2.4rem;
  background-color: var(--white);
  border: 2px solid var(--primary);
  text-decoration: none;
  color: var(--primary);
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--white);

    .c-location-card__number {
      opacity: 0.4;
    }

    .c-location-card__county {
      color: rgba(255,255,255,0.6);
    }
  }

  &__number {
    grid-row: 1 / 3;
    font-size: 3.6rem;
    font-weight: 700;
    opacity: 0.15;
    line-height: 1;
    align-self: center;
  }

  &__name {
    font-size: var(--font-size--h3);
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    align-self: end;
  }

  &__county {
    font-size: var(--font-size--small);
    color: var(--gray-dark);
    align-self: start;
    transition: color 0.2s ease;
  }

  &__arrow {
    grid-row: 1 / 3;
    font-size: 2.4rem;
    align-self: center;
    justify-self: end;
    transition: transform 0.2s ease;
  }

  &:hover &__arrow,
  &:focus &__arrow {
    transform: translateX(0.4rem);
  }
}
</style>
