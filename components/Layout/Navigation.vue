<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()
    defineProps<{ isOpen: boolean }>()
</script>

<template>
    <nav class="c-nav" :class="{ 'open-nav': isOpen }">
      <NuxtLink
        class="c-nav__link"
        :class="{ active: route.path === '/' }"
        to="/"
      >Home</NuxtLink>
  
      <NuxtLink
        class="c-nav__link"
        :class="{ active: route.path === '/about' }"
        to="/about"
      >About</NuxtLink>
  
      <NuxtLink
        class="c-nav__link"
        :class="{ active: route.path.startsWith('/services') }"
        to="/services"
      >Services</NuxtLink>
  
      <NuxtLink
        class="c-nav__link"
        :class="{ active: route.path === '/contact' }"
        to="/contact"
      >Contact</NuxtLink>
    </nav>
  </template>

<style scoped lang="scss">
.c-nav {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    inset: 0;
    background-color: rgba(255,255,255, .8);
    backdrop-filter: blur(1rem);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.open-nav {
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease-in-out;
    }

    &__link {
        color: var(--primary);
        text-decoration: none;
        padding: 1rem;
        font-size: var(--font-size--large);
        text-transform: uppercase;        

        &.active {
            position: relative;

            &::after {
                content: "";
                position: absolute;
                height: .2rem;
                width: calc(100% - 2rem);
                margin: 0 auto;
                bottom: 1rem;
                left: 0;
                right: 0;
                background-color: var(--primary);
            }
        }
    }
}

@media (min-width: 768px) {
    .c-nav {
        opacity: 1;
        visibility: visible;
        position: static;
        background-color: transparent;
        height: auto;
        width: auto;
        display: block;
        backdrop-filter: blur(0);

        &__link {
            color: var(--white);
            text-decoration: none;
            padding: 0 1rem;
            font-size: var(--font-size--large);
            text-transform: uppercase;

            &.active {
                &::after {
                    bottom: -.2rem;
                    background-color: var(--white);
                }
            }
        }
    }
}
</style>