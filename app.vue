<template>
  <div>
    <Nav />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100",
  },
});
</script>
