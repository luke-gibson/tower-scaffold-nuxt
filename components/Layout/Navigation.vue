<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
</script>

<template>
  <nav class="c-nav" :class="{ 'open-nav': isOpen }">
    <NuxtLink class="c-nav__link" to="/">Home</NuxtLink>
    <NuxtLink class="c-nav__link" to="/about">About</NuxtLink>
    <NuxtLink class="c-nav__link" to="/services">Services</NuxtLink>
    <NuxtLink class="c-nav__link" to="/contact">Contact</NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.c-nav {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    inset: 0;
    background-color: rgba(255,255,255, .8);
    backdrop-filter: blur(10px);
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

        &__link {
            color: var(--white);
            text-decoration: none;
            padding: 0 1rem;
            font-size: var(--font-size--large);
            text-transform: uppercase;
        }
    }
}
</style>