<script setup lang="ts">
import type { ServicesData } from '~/types/services';
const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData<ServicesData>('services', () =>
  $fetch('/api/services-page')
);

const services = computed(() => data.value?.data?.services ?? []);
const heroBlock = computed(() => data.value?.data?.content?.[0]);

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}${route.fullPath}` }],
});

useSeoMeta({
  title: data.value?.data.title || 'Scaffolding Services | Tower Scaffold + Safety Netting',
  ogTitle: data.value?.data.title || 'Scaffolding Services | Tower Scaffold + Safety Netting',
  description: data.value?.data.description || 'Expert scaffolding services from Tower Scaffold + Safety Netting.',
  ogDescription: data.value?.data.description || 'Expert scaffolding services from Tower Scaffold + Safety Netting.',
  ogImage: data.value?.data.image?.formats?.large?.url || data.value?.data.image?.url,
  ogType: 'website',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <!-- Hero from CMS -->
    <HeroComponent
      v-if="heroBlock"
      :image="heroBlock.image"
      :content="heroBlock.content"
    />

    <!-- Services grid -->
    <section class="c-svc-index">
      <LayoutContainer>
        <div class="c-svc-index__hd">
          <p class="c-svc-eyebrow">What We Do</p>
          <h2 class="c-svc-index__title">Our Scaffolding Services</h2>
          <p class="c-svc-index__sub">We provide a complete range of scaffolding and access solutions across Hampshire and West Sussex. Click any service to find out more.</p>
        </div>
        <div class="c-svc-index__grid" v-if="services.length">
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.slug}`"
            class="c-svc-card"
          >
            <div class="c-svc-card__media" v-if="service.image">
              <NuxtPicture
                :src="service.image.formats?.medium?.url || service.image.url"
                :alt="service.image.alternativeText || service.name"
                :width="service.image.formats?.medium?.width || service.image.width"
                :height="service.image.formats?.medium?.height || service.image.height"
                format="avif,webp,jpg"
                class="c-svc-card__img"
              />
            </div>
            <div class="c-svc-card__overlay" aria-hidden="true" />
            <div class="c-svc-card__content">
              <h3 class="c-svc-card__title">{{ service.name }}</h3>
              <span class="c-svc-card__arrow" aria-hidden="true">→</span>
            </div>
          </NuxtLink>
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>

<style scoped lang="scss">
.c-svc-index {
  padding: var(--component-spacing) 0;

  &__hd {
    margin-bottom: 4rem;
  }

  &__title {
    color: var(--primary);
    text-transform: uppercase;
    margin-top: 0.8rem;
    margin-bottom: 1.2rem;
  }

  &__sub {
    color: #555;
    max-width: 56rem;
    line-height: 1.7;
    margin-bottom: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 960px) { grid-template-columns: repeat(3, 1fr); }
  }
}

.c-svc-eyebrow {
  font-size: var(--font-size--small);
  text-transform: uppercase;
  letter-spacing: .3rem;
  color: var(--primary);
  margin-bottom: 0.4rem;
}

.c-svc-card {
  position: relative;
  display: block;
  height: 28rem;
  border-radius: 0.4rem;
  overflow: hidden;
  text-decoration: none;

  @media (min-width: 960px) { height: 36rem; }

  &__media {
    position: absolute;
    inset: 0;
    :deep(picture), :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s ease;
    }
  }

  &:hover &__media :deep(img),
  &:focus &__media :deep(img) { transform: scale(1.04); }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,9,59,0.88) 0%, rgba(0,20,137,0.3) 50%, transparent 100%);
    transition: opacity 0.3s ease;
  }

  &:hover &__overlay { opacity: 0.9; }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2.4rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__title {
    color: var(--white);
    font-size: var(--font-size--h3);
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 0;
    max-width: 20ch;
  }

  &__arrow {
    color: var(--white);
    font-size: 2.4rem;
    opacity: 0.6;
    flex-shrink: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:hover &__arrow,
  &:focus &__arrow { transform: translateX(0.4rem); opacity: 1; }
}
</style>
