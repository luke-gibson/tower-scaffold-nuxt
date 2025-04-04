<script setup lang="ts">
import { useMobileNav } from '@/composables/useMobileNav'

defineProps<{ isActive: boolean }>()

const { toggleNav } = useMobileNav()
</script>

<template>
  <div
    class="c-hamburger"
    :class="{ 'is-active': isActive }"
    @click="toggleNav"
    data-hamburger
    aria-label="Toggle mobile navigation"
  >
    <span class="c-hamburger__line"></span>
    <span class="c-hamburger__line"></span>
    <span class="c-hamburger__line"></span>
  </div>
</template>

<style lang="scss" scoped>
.c-hamburger {
  $root: &;
  position: absolute;
  top: 1.25rem;
  right: 2rem;
  display: block;

  &__line {
    width: 3.5rem;
    height: .3rem;
    background-color: var(--white);
    display: block;
    margin: .8rem auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active {
    #{ $root } {
      &__line {
        background-color: var(--primary);

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(1) {
          transform: translateY(13px) rotate(45deg);
        }

        &:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .c-hamburger {
    display: none;
  }
}
</style>