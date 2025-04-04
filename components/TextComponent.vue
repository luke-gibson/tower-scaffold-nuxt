<script setup lang="ts">
  defineProps<{
    content?: string;
  }>();
</script>

<template>
  <section class="text">
    <h1>{{ content }}</h1>
  </section>
</template>

<style scoped>
.text {
  padding: 20px;
}
</style>