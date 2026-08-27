<script setup lang="ts">
import type { ContactData } from '~/types/contact';
const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData<ContactData>('contact', () =>
  $fetch('/api/contact')
);

const heroImage = computed(() => data.value?.data?.image);

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}${route.fullPath}` }],
});

useSeoMeta({
  title: data.value?.data.title || 'Contact Us | Tower Scaffold + Safety Netting',
  ogTitle: data.value?.data.title || 'Contact Us | Tower Scaffold + Safety Netting',
  description: data.value?.data.description || 'Get in touch with Tower Scaffold + Safety Netting for a free scaffolding quote across Hampshire and West Sussex.',
  ogDescription: data.value?.data.description || 'Get in touch with Tower Scaffold + Safety Netting for a free scaffolding quote across Hampshire and West Sussex.',
  ogImage: heroImage.value?.formats?.large?.url || heroImage.value?.url,
  ogType: 'website',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="c-contact-page">

    <!-- Hero -->
    <section class="c-contact-hero">
      <div class="c-contact-hero__media">
        <NuxtPicture
          src="https://safe-broccoli-94775bb690.media.strapiapp.com/tower_scaffolding_home_banner_388334a539_39de340232.webp"
          alt="Tower Scaffold + Safety Netting"
          width="1000"
          height="562"
          format="avif,webp,jpg"
          class="c-contact-hero__img"
        />
      </div>
      <div class="c-contact-hero__overlay" aria-hidden="true" />
      <LayoutContainer class="c-contact-hero__content">
        <p class="c-contact-hero__eyebrow">Hampshire &amp; West Sussex</p>
        <h1 class="c-contact-hero__heading">Get in Touch</h1>
        <p class="c-contact-hero__sub">Ready to start your project? Fill in the form below or give us a call. We respond to all enquiries within 24 hours.</p>
      </LayoutContainer>
    </section>

    <!-- Contact section -->
    <section class="c-contact-section">
      <LayoutContainer class="c-contact-section__inner">

        <div class="c-contact-info">
          <p class="c-contact-eyebrow">Contact Details</p>
          <h2 class="c-contact-info__heading">We'd love to hear from you</h2>
          <p class="c-contact-info__body">Whether you need a quote, have a question about our services, or want to discuss a project, our team is ready to help.</p>

          <div class="c-contact-info__items">
            <div class="c-contact-info__item">
              <span class="c-contact-info__item-label">Phone</span>
              <a href="tel:+447976392257" class="c-contact-info__item-value">07976 392257</a>
            </div>
            <div class="c-contact-info__item">
              <span class="c-contact-info__item-label">Email</span>
              <a href="mailto:info@towerscaffold-netting.co.uk" class="c-contact-info__item-value">info@towerscaffold-netting.co.uk</a>
            </div>
            <div class="c-contact-info__item">
              <span class="c-contact-info__item-label">Hours</span>
              <span class="c-contact-info__item-value">Monday – Friday</span>
            </div>
            <div class="c-contact-info__item">
              <span class="c-contact-info__item-label">Coverage</span>
              <span class="c-contact-info__item-value">Hampshire &amp; West Sussex</span>
            </div>
          </div>
        </div>

        <div class="c-contact-form-wrap">
          <ContactForm :dark="false" />
        </div>

      </LayoutContainer>
    </section>

  </div>
</template>

<style scoped lang="scss">
// ── HERO ─────────────────────────────────────────────────────────────────────
.c-contact-hero {
  position: relative;
  height: 55vh;
  min-height: 40rem;
  max-height: 65rem;
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
    background: linear-gradient(135deg, rgba(0,20,137,0.92) 0%, rgba(0,9,59,0.72) 55%, rgba(0,9,59,0.4) 100%);
  }

  &__content {
    position: relative;
    z-index: 2;
    padding-top: 7rem;
  }

  &__eyebrow {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .4rem;
    color: rgba(255,255,255,0.55);
    margin-bottom: 1rem;
  }

  &__heading {
    font-size: clamp(3.6rem, 7vw, 6.4rem);
    line-height: 1.0;
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }

  &__sub {
    font-size: var(--font-size--body);
    color: rgba(255,255,255,0.78);
    max-width: 50rem;
    line-height: 1.7;
    margin-bottom: 0;
  }
}

// ── CONTACT SECTION ──────────────────────────────────────────────────────────
.c-contact-section {
  background-color: var(--white);
  padding: var(--component-spacing) 0;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1.4fr;
      align-items: start;
      gap: 8rem;
    }
  }
}

.c-contact-eyebrow {
  font-size: var(--font-size--small);
  text-transform: uppercase;
  letter-spacing: .3rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
}

.c-contact-info {
  &__heading {
    color: var(--primary);
    text-transform: uppercase;
    font-size: var(--font-size--h2);
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }

  &__body {
    color: #555;
    line-height: 1.7;
    margin-bottom: 3.2rem;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid #e0e0e0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1.6rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  &__item-label {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #999;
  }

  &__item-value {
    font-size: var(--font-size--body);
    color: var(--black);
    text-decoration: none;
    transition: color 0.2s ease;

    &[href]:hover, &[href]:focus { color: var(--primary); }
  }
}

.c-contact-form-wrap {
  padding-top: 0.4rem;
}
</style>
