<script setup>
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="c-footer">
    <div class="c-footer__bg-image" aria-hidden="true">
      <NuxtPicture
        src="https://safe-broccoli-94775bb690.media.strapiapp.com/tower_scaffolding_home_banner_388334a539_39de340232.webp"
        alt=""
        width="960"
        height="540"
        format="avif,webp,jpg"
      />
    </div>

    <LayoutContainer class="c-footer__inner">
      <div class="c-footer__brand">
        <p class="c-footer__company-name">Tower Scaffold<br>+ Safety Netting</p>
        <p class="c-footer__tagline">Expert scaffolding across Hampshire &amp; West Sussex</p>
        <div class="c-footer__contact-links">
          <a href="tel:+447976392257" class="c-footer__link c-footer__link--phone">07976 392257</a>
          <a href="mailto:info@towerscaffold-netting.co.uk" class="c-footer__link c-footer__link--email">info@towerscaffold-netting.co.uk</a>
        </div>
      </div>

      <nav class="c-footer__nav" aria-label="Footer">
        <h3 class="c-footer__nav-heading">Quick Links</h3>
        <ul class="c-footer__nav-list">
          <li><NuxtLink to="/" class="c-footer__nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="c-footer__nav-link">About Us</NuxtLink></li>
          <li><NuxtLink to="/services" class="c-footer__nav-link">Services</NuxtLink></li>
          <li><NuxtLink to="/locations" class="c-footer__nav-link">Locations</NuxtLink></li>
          <li><NuxtLink to="/contact" class="c-footer__nav-link">Contact</NuxtLink></li>
        </ul>
      </nav>

      <nav class="c-footer__nav" aria-label="Areas We Cover">
        <h3 class="c-footer__nav-heading">Areas We Cover</h3>
        <ul class="c-footer__nav-list">
          <li><NuxtLink to="/locations/portsmouth" class="c-footer__nav-link">Portsmouth</NuxtLink></li>
          <li><NuxtLink to="/locations/gosport" class="c-footer__nav-link">Gosport</NuxtLink></li>
          <li><NuxtLink to="/locations/fareham" class="c-footer__nav-link">Fareham</NuxtLink></li>
          <li><NuxtLink to="/locations/waterlooville" class="c-footer__nav-link">Waterlooville</NuxtLink></li>
        </ul>
      </nav>
    </LayoutContainer>

    <div class="c-footer__bottom">
      <LayoutContainer class="c-footer__bottom-inner">
        <small class="c-footer__copy">&copy; {{ currentYear }} Tower Scaffold + Safety Netting. All rights reserved.</small>
        <small class="c-footer__credit">website | <a href="https://ovalcreative.co.uk" target="_blank" rel="noopener noreferrer" class="c-footer__credit-link">oval creative</a></small>
      </LayoutContainer>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.c-footer {
  background-color: var(--primary);
  color: var(--white);
  position: relative;
  overflow: hidden;

  &__bg-image {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    pointer-events: none;

    :deep(picture),
    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__inner {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-top: 6rem;
    padding-bottom: 4rem;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr 1fr;
      gap: 6rem;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  &__company-name {
    font-size: var(--font-size--h2);
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 0;
    letter-spacing: .05rem;
  }

  &__tagline {
    font-size: var(--font-size--small);
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 0;
  }

  &__contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  &__link {
    color: var(--white);
    text-decoration: none;
    font-size: var(--font-size--body);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: opacity 0.2s ease;

    &:hover,
    &:focus {
      opacity: 0.7;
      text-decoration: underline;
    }

    &--phone {
      font-size: var(--font-size--h3);
      font-weight: 700;
    }
  }

&__nav-heading {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .2rem;
    opacity: 0.5;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding-bottom: 0.8rem;
  }

  &__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__nav-link {
    color: var(--white);
    text-decoration: none;
    font-size: var(--font-size--body);
    opacity: 0.8;
    transition: opacity 0.2s ease;
    display: inline-block;

    &:hover,
    &:focus {
      opacity: 1;
      text-decoration: underline;
    }
  }

  &__bottom {
    position: relative;
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  &__bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__copy {
    font-size: var(--font-size--small);
    opacity: 0.5;
  }

  &__credit {
    font-size: 1.1rem;
    font-weight: 300;
    opacity: 0.3;
    letter-spacing: .05rem;
  }

  &__credit-link {
    color: var(--white);
    text-decoration: underline;
    text-underline-offset: 0.2em;
    transition: opacity 0.2s ease;

    &:hover, &:focus {
      opacity: 1;
    }
  }
}
</style>
