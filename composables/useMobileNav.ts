import { ref } from 'vue'

const isMobileNavOpen = ref(false)

export function useMobileNav() {
  function toggleNav() {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  function closeNav() {
    isMobileNavOpen.value = false
  }

  return {
    isMobileNavOpen,
    toggleNav,
    closeNav
  }
}