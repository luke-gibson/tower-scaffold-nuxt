<template>
    <LayoutHeader />
    <main>
        <slot />
    </main>
    <LayoutFooter />
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
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