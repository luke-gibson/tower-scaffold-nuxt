<script setup lang="ts">
  defineProps<{
    copy?: string;
  }>();
</script>

<template>
  <div class="text">
    <h1>{{ copy }}</h1>
  </div>
</template>

<style scoped>
.text {
  padding: 20px;
}
</style>