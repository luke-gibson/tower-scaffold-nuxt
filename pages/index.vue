<script setup lang="ts">
import type { HomeData } from '~/types/home';
const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData<HomeData>('home', () =>
  $fetch('/api/home')
);

const services = computed(() => data.value?.data?.services ?? []);
const heroImage = computed(() => data.value?.data?.content?.[0]?.image);

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}${route.fullPath}` }],
});

useSeoMeta({
  title: data.value?.data.title || 'Scaffolding Hampshire & West Sussex | Tower Scaffold + Safety Netting',
  ogTitle: data.value?.data.title || 'Scaffolding Hampshire & West Sussex | Tower Scaffold + Safety Netting',
  description: data.value?.data.description || 'Tower Scaffolding + Safety Netting provides expert scaffolding and safety netting solutions in Hampshire.',
  ogDescription: data.value?.data.description || 'Tower Scaffolding + Safety Netting provides expert scaffolding and safety netting solutions in Hampshire.',
  ogImage: heroImage.value?.formats?.large?.url || heroImage.value?.url,
  ogType: 'website',
  twitterCard: 'summary_large_image',
});

</script>

<template>
  <div class="c-home">

    <!-- ── HERO ── -->
    <section class="c-home-hero">
      <div class="c-home-hero__media" v-if="heroImage">
        <NuxtPicture
          :src="heroImage.formats?.large?.url || heroImage.url"
          :alt="heroImage.alternativeText || 'Tower Scaffold + Safety Netting'"
          :width="heroImage.formats?.large?.width || heroImage.width"
          :height="heroImage.formats?.large?.height || heroImage.height"
          format="avif,webp,jpg"
          class="c-home-hero__image"
        />
      </div>
      <div class="c-home-hero__overlay" aria-hidden="true" />
      <LayoutContainer class="c-home-hero__content">
        <p class="c-home-hero__eyebrow">Hampshire &amp; West Sussex</p>
        <h1 class="c-home-hero__heading">Expert Scaffolding<br>&amp; Safety Netting</h1>
        <p class="c-home-hero__sub">Safe, reliable and competitively priced scaffolding solutions for residential, commercial and industrial projects.</p>
        <div class="c-home-hero__actions">
          <NuxtLink to="/contact" class="c-btn c-btn--white">Get a Free Quote</NuxtLink>
          <NuxtLink to="/services" class="c-btn c-btn--ghost">Our Services</NuxtLink>
        </div>
      </LayoutContainer>
      <div class="c-home-hero__clip" aria-hidden="true" />
    </section>

    <!-- ── STATS ── -->
    <section class="c-home-stats" aria-label="Company highlights">
      <LayoutContainer class="c-home-stats__inner">
        <div class="c-home-stat">
          <span class="c-home-stat__value">20+</span>
          <span class="c-home-stat__label">Years Experience</span>
        </div>
        <div class="c-home-stat__divider" aria-hidden="true" />
        <div class="c-home-stat">
          <span class="c-home-stat__value">FASET</span>
          <span class="c-home-stat__label">Qualified Safety Netting</span>
        </div>
        <div class="c-home-stat__divider" aria-hidden="true" />
        <div class="c-home-stat">
          <span class="c-home-stat__value">100%</span>
          <span class="c-home-stat__label">Fully Insured &amp; Compliant</span>
        </div>
      </LayoutContainer>
    </section>

    <!-- ── INTRO ── -->
    <section class="c-home-intro">
      <LayoutContainer class="c-home-intro__inner">
        <div class="c-home-intro__text">
          <p class="c-eyebrow">Our Company</p>
          <h2 class="c-home-intro__heading">Built on 20 Years of Expertise</h2>
          <p class="c-home-intro__body">Tower Scaffold + Safety Netting has been built up over two decades into a company with a sound reputation for producing high quality workmanship at a fair price. Our scaffolding services are designed to suit the individual, self-builder or building company across Hampshire, Sussex and Surrey.</p>
          <p class="c-home-intro__body">We specialise in providing tailored access, containment and scaffolding solutions to suit individual needs — from simple house refurbishments and roof repairs through to bespoke scaffolding for high-rise apartments, large factories and industrial maintenance.</p>
          <NuxtLink to="/about" class="c-text-link">About Us →</NuxtLink>
        </div>
        <div class="c-home-intro__media">
          <NuxtPicture
            src="https://safe-broccoli-94775bb690.media.strapiapp.com/large_13ecd65f_c375_4d5d_8379_3171dfe5b51a_42ceb30f9a_e17f6c9f40.jpg"
            alt="Tower Scaffold + Safety Netting scaffolding project"
            width="1000"
            height="563"
            format="avif,webp,jpg"
            class="c-home-intro__img"
          />
          <div class="c-home-intro__img-accent" aria-hidden="true" />
        </div>
      </LayoutContainer>
    </section>

    <!-- ── SERVICES ── -->
    <section class="c-home-services">
      <LayoutContainer>
        <div class="c-home-section-hd">
          <p class="c-eyebrow">What We Do</p>
          <h2>Our Scaffolding Services</h2>
        </div>
        <div class="c-home-services__grid" v-if="services.length">
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

    <!-- ── WHY CHOOSE US ── -->
    <section class="c-home-why">
      <LayoutContainer class="c-home-why__inner">
        <div class="c-home-why__media">
          <NuxtPicture
            src="https://safe-broccoli-94775bb690.media.strapiapp.com/large_9e593a7c_804d_44dc_8dcd_316c42c1e7c2_988b2bb081_c99572696d.jpg"
            alt="Residential scaffolding project"
            width="1000"
            height="750"
            format="avif,webp,jpg"
            class="c-home-why__img"
          />
        </div>
        <div class="c-home-why__content">
          <p class="c-eyebrow">Why Choose Us</p>
          <h2 class="c-home-why__heading">The Trusted Scaffolding Contractor in Hampshire</h2>
          <ul class="c-check-list">
            <li>Over 20 years of industry experience</li>
            <li>FASET-qualified safety netting to BS EN 1263 standards</li>
            <li>Full drawings and safety documentation on every project</li>
            <li>Competitive, transparent pricing — no hidden costs</li>
            <li>Fast mobilisation to suit your schedule</li>
            <li>Fully insured and health &amp; safety compliant</li>
          </ul>
          <NuxtLink to="/contact" class="c-text-link">Get a Free Quote →</NuxtLink>
        </div>
      </LayoutContainer>
    </section>

    <!-- ── CONTACT FORM ── -->
    <section class="c-home-contact" id="contact">
      <LayoutContainer class="c-home-contact__inner">

        <div class="c-home-contact__info">
          <p class="c-eyebrow c-eyebrow--light">Get in Touch</p>
          <h2 class="c-home-contact__heading">Ready to get started?</h2>
          <p class="c-home-contact__sub">Fill in the form and we'll get back to you within 24 hours. Prefer to call? We're available Monday to Friday.</p>
          <a href="tel:+447976392257" class="c-home-contact__phone">07976 392257</a>
          <a href="mailto:info@towerscaffold-netting.co.uk" class="c-home-contact__email">info@towerscaffold-netting.co.uk</a>
        </div>

        <div class="c-home-contact__form-wrap">
          <ContactForm />
        </div>

      </LayoutContainer>
    </section>

  </div>
</template>

<style scoped lang="scss">
// ── SHARED ATOMS ─────────────────────────────────────────────────────────────
.c-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 3.2rem;
  font-size: var(--font-size--body);
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: .1rem;
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  &:disabled { opacity: 0.6; cursor: not-allowed; }

  &--white {
    background-color: var(--white);
    color: var(--primary);
    border-color: var(--white);
    &:hover, &:focus { background-color: transparent; color: var(--white); }
  }

  &--ghost {
    background-color: transparent;
    color: var(--white);
    border-color: rgba(255,255,255,0.5);
    &:hover, &:focus { border-color: var(--white); background-color: rgba(255,255,255,0.08); }
  }
}

.c-eyebrow {
  font-size: var(--font-size--small);
  text-transform: uppercase;
  letter-spacing: .3rem;
  color: var(--primary);
  margin-bottom: 0.8rem;

  &--light { color: rgba(255,255,255,0.55); }
}

.c-text-link {
  display: inline-block;
  margin-top: 2rem;
  color: var(--primary);
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--font-size--small);
  letter-spacing: .1rem;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.2rem;
  transition: opacity 0.2s ease;
  &:hover, &:focus { opacity: 0.6; }
}

.c-check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    font-size: var(--font-size--body);
    line-height: 1.5;

    &::before {
      content: "";
      flex-shrink: 0;
      width: 1.8rem;
      height: 1.8rem;
      margin-top: 0.2rem;
      background-color: var(--primary);
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
  }
}

// ── HERO ─────────────────────────────────────────────────────────────────────
.c-home-hero {
  position: relative;
  height: 100vh;
  min-height: 60rem;
  max-height: 90rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__media {
    position: absolute;
    inset: 0;
    :deep(picture), :deep(img) { width: 100%; height: 100%; object-fit: cover; object-position: center; }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,20,137,0.93) 0%, rgba(0,9,59,0.78) 55%, rgba(0,9,59,0.38) 100%);
  }

  &__content {
    position: relative;
    z-index: 2;
    padding-top: 8rem;
  }

  &__eyebrow {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .4rem;
    color: rgba(255,255,255,0.55);
    margin-bottom: 1.2rem;
  }

  &__heading {
    font-size: clamp(4rem, 8vw, 7.2rem);
    line-height: 1.0;
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 2.4rem;
    max-width: 18ch;
  }

  &__sub {
    font-size: var(--font-size--body);
    color: rgba(255,255,255,0.78);
    max-width: 48rem;
    margin-bottom: 3.6rem;
    line-height: 1.7;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  &__clip {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 8rem;
    background-color: var(--secondary);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    z-index: 1;
  }
}

// ── STATS ────────────────────────────────────────────────────────────────────
.c-home-stats {
  background-color: var(--secondary);
  padding: 5rem 0;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media (min-width: 768px) { justify-content: space-between; gap: 0; }
  }
}

.c-home-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__value {
    font-size: var(--font-size--h1);
    color: var(--white);
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0.6rem;
  }

  &__label {
    font-size: var(--font-size--small);
    color: rgba(255,255,255,0.45);
    text-transform: uppercase;
    letter-spacing: .1rem;
  }

  &__divider {
    width: 1px;
    height: 5rem;
    background-color: rgba(255,255,255,0.12);
    display: none;
    @media (min-width: 768px) { display: block; }
  }
}

// ── SECTION HEADING ──────────────────────────────────────────────────────────
.c-home-section-hd {
  margin-bottom: 4rem;

  h2 {
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 0;
  }
}

// ── INTRO ────────────────────────────────────────────────────────────────────
.c-home-intro {
  padding: var(--component-spacing) 0;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    @media (min-width: 768px) { grid-template-columns: 1fr 1fr; align-items: center; gap: 8rem; }
  }

  &__heading {
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 0.8rem;
  }

  &__body { color: #444; line-height: 1.8; }

  &__media {
    position: relative;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  &__img {
    display: block;
    :deep(img) { width: 100%; height: auto; display: block; }
  }

  &__img-accent {
    position: absolute;
    inset: 0;
    border: 3px solid var(--primary);
    border-radius: 0.4rem;
    transform: translate(1.4rem, 1.4rem);
    z-index: -1;
    pointer-events: none;
  }
}

// ── SERVICES ─────────────────────────────────────────────────────────────────
.c-home-services {
  padding: var(--component-spacing) 0;
  background-color: #f5f6fa;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 960px) { grid-template-columns: repeat(3, 1fr); }
  }
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
    :deep(picture), :deep(img) { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.4s ease; }
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

// ── WHY CHOOSE US ────────────────────────────────────────────────────────────
.c-home-why {
  padding: var(--component-spacing) 0;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    @media (min-width: 768px) { grid-template-columns: 1fr 1fr; align-items: center; gap: 8rem; }
  }

  &__media {
    border-radius: 0.4rem;
    overflow: hidden;
    order: 2;
    @media (min-width: 768px) { order: 1; }
    :deep(img) { width: 100%; height: auto; display: block; }
  }

  &__content { order: 1; @media (min-width: 768px) { order: 2; } }

  &__heading {
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 2.4rem;
    margin-top: 0.8rem;
  }
}

// ── CONTACT FORM ─────────────────────────────────────────────────────────────
.c-home-contact {
  background-color: var(--primary);
  padding: var(--component-spacing) 0;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    @media (min-width: 768px) { grid-template-columns: 1fr 1.4fr; align-items: start; gap: 8rem; }
  }

  &__info { display: flex; flex-direction: column; }

  &__heading {
    color: var(--white);
    text-transform: uppercase;
    font-size: var(--font-size--h2);
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }

  &__sub {
    color: rgba(255,255,255,0.7);
    line-height: 1.7;
    margin-bottom: 2.8rem;
  }

  &__phone {
    color: var(--white);
    text-decoration: none;
    font-size: var(--font-size--h3);
    font-weight: 700;
    margin-bottom: 0.8rem;
    transition: opacity 0.2s ease;
    &:hover, &:focus { opacity: 0.7; }
  }

  &__email {
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    font-size: var(--font-size--body);
    transition: opacity 0.2s ease;
    &:hover, &:focus { opacity: 1; color: var(--white); }
  }
}

</style>
