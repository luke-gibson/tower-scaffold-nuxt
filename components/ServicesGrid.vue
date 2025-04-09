<script lang="ts" setup>
import type { ServiceData } from '~/types/service';
defineProps<{
  services: ServiceData[];
}>();
</script>

<template>
  <section class="c-services o-section">
    <LayoutContainer v-if="services.length">
      <h2 class="c-services__heading">Services</h2>
      <div class="c-services__grid">
        <Card 
          v-for="service in services" 
          :key="service.id" 
          :title="service.title" 
          :slug="service.slug" 
          :image="service.image"        
        />
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped lang="scss">
.c-services {

  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__heading {
    margin-bottom: 0;
    color: var(--primary);
  }
}

@media (min-width: 768px) {
  .c-services {
      &__heading {
        margin-bottom: 1rem;
        text-transform: uppercase;
      }
    }
  }
</style>