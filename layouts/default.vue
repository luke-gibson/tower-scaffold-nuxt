<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://towerscaffold-netting.co.uk/#business',
        name: 'Tower Scaffold + Safety Netting',
        url: 'https://towerscaffold-netting.co.uk',
        telephone: '+447976392257',
        email: 'info@towerscaffold-netting.co.uk',
        description: 'Expert scaffolding and FASET-qualified safety netting across Hampshire and West Sussex. Over 20 years of experience, fully insured and compliant.',
        priceRange: '££',
        image: 'https://safe-broccoli-94775bb690.media.strapiapp.com/tower_scaffolding_home_banner_388334a539_39de340232.webp',
        logo: 'https://towerscaffold-netting.co.uk/favicon.png',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Hampshire',
          addressCountry: 'GB',
        },
        areaServed: [
          { '@type': 'City', name: 'Portsmouth' },
          { '@type': 'City', name: 'Southampton' },
          { '@type': 'City', name: 'Fareham' },
          { '@type': 'City', name: 'Gosport' },
          { '@type': 'City', name: 'Waterlooville' },
          { '@type': 'City', name: 'Havant' },
          { '@type': 'City', name: 'Chichester' },
          { '@type': 'City', name: 'Winchester' },
          { '@type': 'City', name: 'Petersfield' },
          { '@type': 'City', name: 'Basingstoke' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Scaffolding Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Scaffolding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Industrial Scaffolding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safety Netting Installation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scaffold Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haki Staircase Hire' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Temporary Roof Scaffolding' } },
          ],
        },
        sameAs: [],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:30',
            closes: '17:30',
          },
        ],
      }),
    },
  ],
})
</script>

<template>
    <LayoutHeader />
    <main>
        <slot />
    </main>
    <LayoutFooter />
</template>

<style lang="scss">
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: Fjalla One, sans-serif;
}

body.is-locked {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    width: 100%;
}

:root {
    --primary: #001489;
    --secondary: #13172b;
    --white: #ffffff;
    --black: #000000;
    --gray: #808080;
    --gray-light: #d3d3d3;
    --gray-dark: #696969;

    --font-size--h1: 2.8rem;
    --font-size--h2: 2.4rem;
    --font-size--h3: 2rem;
    --font-size--body: 1.6rem;
    --font-size--small: 1.4rem;
    
    --line-height--heading: 1.2;
    --line-height--body: 1.6;

    --letter-spacing: .05rem;

    --component-spacing: 4rem;
}

@media (min-width: 768px) {
  :root {
    --font-size--h1: 3.6rem;
    --font-size--h2: 3rem;
    --font-size--h3: 2.4rem;
    --font-size--body: 1.8rem;
    --font-size--small: 1.5rem;
    --letter-spacing: .1rem;
    --component-spacing: 6rem;
  }
}

body {
  font-size: var(--font-size--body);
  line-height: var(--line-height--body);
  color: var(--black);
  background-color: var(--white);
  letter-spacing: var(--letter-spacing);
}

h1, h2, h3, h4, h5, h6 {
  font-family: inherit;
  font-weight: normal;
  line-height: var(--line-height--heading);
  margin-bottom: 1.6rem;
}

h1 {
  font-size: var(--font-size--h1);
}

h2 {
  font-size: var(--font-size--h2);
}

h3 {
  font-size: var(--font-size--h3);
}

p {
  font-size: var(--font-size--body);
  margin-bottom: 1.6rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}

small {
  font-size: var(--font-size--small);
}

.o-section {
  margin-top: var(--component-spacing);
  margin-bottom: var(--component-spacing);

  &--top {
    margin-top: var(--component-spacing);
  }

  &--bottom {
    margin-bottom: var(--component-spacing);
  }
}
picture {
  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }
}
</style>