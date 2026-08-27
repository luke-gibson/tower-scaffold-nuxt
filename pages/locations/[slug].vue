<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

interface LocationData {
  name: string;
  slug: string;
  title: string;
  description: string;
  county: string;
  nearby: string;
  content: any[];
}

const { data } = await useAsyncData<{ data: LocationData }>(`location-${route.params.slug}`, () =>
  $fetch(`/api/locations/${route.params.slug}`)
);

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}${route.fullPath}` }],
  script: data.value ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${config.public.siteUrl}${route.fullPath}#service`,
        name: `Scaffolding in ${data.value.data.name}`,
        description: data.value.data.description,
        provider: {
          '@id': 'https://towerscaffold-netting.co.uk/#business',
        },
        areaServed: {
          '@type': 'City',
          name: data.value.data.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: data.value.data.county,
          },
        },
        url: `${config.public.siteUrl}${route.fullPath}`,
      }),
    },
  ] : [],
});

useSeoMeta({
  title: data.value?.data.title || 'Scaffolding Services | Tower Scaffold + Safety Netting',
  ogTitle: data.value?.data.title || 'Scaffolding Services | Tower Scaffold + Safety Netting',
  description: data.value?.data.description || 'Expert scaffolding services from Tower Scaffold + Safety Netting.',
  ogDescription: data.value?.data.description || 'Expert scaffolding services from Tower Scaffold + Safety Netting.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div v-if="data">
    <!-- HERO -->
    <section class="c-loc-hero">
      <div class="c-loc-hero__media">
        <NuxtPicture
          src="https://safe-broccoli-94775bb690.media.strapiapp.com/tower_scaffolding_home_banner_388334a539_39de340232.webp"
          alt="Tower Scaffold + Safety Netting"
          width="1000"
          height="562"
          format="avif,webp,jpg"
          class="c-loc-hero__image"
        />
      </div>
      <div class="c-loc-hero__overlay" aria-hidden="true" />
      <LayoutContainer class="c-loc-hero__content">
        <p class="c-loc-hero__eyebrow">{{ data.data.county }}</p>
        <h1 class="c-loc-hero__heading">Scaffolding in<br>{{ data.data.name }}</h1>
        <p class="c-loc-hero__sub">Expert scaffolding and safety netting for residential, commercial and industrial projects across {{ data.data.name }}.</p>
        <div class="c-loc-hero__actions">
          <NuxtLink to="/contact" class="c-loc-hero__btn c-loc-hero__btn--primary">Get a Free Quote</NuxtLink>
          <a href="tel:+447976392257" class="c-loc-hero__btn c-loc-hero__btn--ghost">07976 392257</a>
        </div>
      </LayoutContainer>
    </section>

    <!-- CONTENT SECTIONS -->
    <DynamicContent :content="data.data.content" />

    <!-- SERVICES LINKS -->
    <section class="c-loc-services">
      <LayoutContainer>
        <p class="c-loc-services__eyebrow">What We Offer</p>
        <h2 class="c-loc-services__heading">Our Services in {{ data.data.name }}</h2>
        <ul class="c-loc-services__list">
          <li><NuxtLink to="/services/residential-and-domestic-scaffolding">Residential &amp; Domestic Scaffolding →</NuxtLink></li>
          <li><NuxtLink to="/services/commercial-and-industrial-scaffolding">Commercial &amp; Industrial Scaffolding →</NuxtLink></li>
          <li><NuxtLink to="/services/safety-netting">Safety Netting Installation →</NuxtLink></li>
          <li><NuxtLink to="/services/temporary-roof-scaffolding">Temporary Roof Scaffolding →</NuxtLink></li>
          <li><NuxtLink to="/services/scaffold-design">Scaffold Design →</NuxtLink></li>
          <li><NuxtLink to="/services/haki-staircase-hire">Haki Staircase Hire →</NuxtLink></li>
        </ul>
      </LayoutContainer>
    </section>

    <!-- BACK LINK -->
    <section class="c-loc-back">
      <LayoutContainer>
        <NuxtLink to="/locations" class="c-loc-back__link">← All Locations</NuxtLink>
      </LayoutContainer>
    </section>
  </div>
  <p v-else>Location not found.</p>
</template>

<style scoped lang="scss">
.c-loc-hero {
  position: relative;
  height: 60vh;
  min-height: 44rem;
  max-height: 70rem;
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
    background: linear-gradient(
      135deg,
      rgba(0, 20, 137, 0.92) 0%,
      rgba(0, 9, 59, 0.72) 60%,
      rgba(0, 9, 59, 0.45) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 2;
    padding-top: 6rem;
  }

  &__eyebrow {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .4rem;
    color: rgba(255,255,255,0.6);
    margin-bottom: 1rem;
  }

  &__heading {
    font-size: clamp(3.2rem, 7vw, 6rem);
    line-height: 1.0;
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  &__sub {
    font-size: var(--font-size--body);
    color: rgba(255,255,255,0.8);
    max-width: 48rem;
    margin-bottom: 3.2rem;
    line-height: 1.7;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  &__btn {
    display: inline-block;
    padding: 1.2rem 2.8rem;
    font-size: var(--font-size--body);
    text-transform: uppercase;
    letter-spacing: .1rem;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &--primary {
      background-color: var(--white);
      color: var(--primary);

      &:hover, &:focus {
        background-color: var(--primary);
        color: var(--white);
        outline: 2px solid var(--white);
      }
    }

    &--ghost {
      background-color: transparent;
      color: var(--white);
      border: 2px solid rgba(255,255,255,0.5);

      &:hover, &:focus {
        border-color: var(--white);
        background-color: rgba(255,255,255,0.1);
      }
    }
  }
}

.c-loc-services {
  padding: var(--component-spacing) 0;
  background-color: #f5f6fa;

  &__eyebrow {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: var(--primary);
    margin-bottom: 0.8rem;
  }

  &__heading {
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
    @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 960px) { grid-template-columns: repeat(3, 1fr); }

    li a {
      display: block;
      padding: 1.6rem 2rem;
      background: var(--white);
      color: var(--primary);
      text-decoration: none;
      font-size: var(--font-size--body);
      border-left: 3px solid var(--primary);
      transition: background-color 0.2s ease, padding-left 0.2s ease;

      &:hover, &:focus {
        background-color: var(--primary);
        color: var(--white);
        padding-left: 2.8rem;
      }
    }
  }
}

.c-loc-back {
  padding: 3rem 0;

  &__link {
    color: var(--primary);
    text-decoration: none;
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .1rem;
    border-bottom: 1px solid currentColor;
    padding-bottom: 0.2rem;
    transition: opacity 0.2s ease;

    &:hover, &:focus {
      opacity: 0.6;
    }
  }
}
</style>
