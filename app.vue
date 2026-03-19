<script setup>
import { onMounted } from 'vue';
if (typeof window !== 'undefined') {
  console.log("App: Root script setup executing on client");
}
onMounted(() => {
  console.log("App mounted on client");
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Base styles */
</style>
