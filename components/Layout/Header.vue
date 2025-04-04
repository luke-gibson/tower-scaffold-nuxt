<script setup lang="ts">
import { useMobileNav } from '@/composables/useMobileNav'

const { isMobileNavOpen, closeNav } = useMobileNav()

const route = useRoute()

watch(() => route.fullPath, () => {
  closeNav()
})

watch(isMobileNavOpen, (val) => {
  if (val) {
    document.body.classList.add('is-locked')
  } else {
    document.body.classList.remove('is-locked')
  }
})
</script>

<template>
  <header class="c-header">
    <LayoutContainer class="c-header__container">
      <NuxtLink to="/" class="c-header__logo">
        <IconsLogoIcon />
      </NuxtLink>
      <LayoutNavigation :isOpen="isMobileNavOpen" />
    </LayoutContainer>
    <LayoutHamburger :isActive="isMobileNavOpen" />
  </header>
</template>

<style scoped lang="scss">
    .c-header {
        position: relative;
        background-color: var(--primary);
        padding-top: 1rem;
        padding-bottom: 1rem;

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__logo {
            width: 10rem
        }
    }     
</style>