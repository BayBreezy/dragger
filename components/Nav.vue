<template>
  <header
    class="sticky top-0 border-b bg-white/80 dark:border-transparent dark:bg-gray-800/80"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between">
      <NuxtLink class="text-lg font-semibold" to="/">Kanban</NuxtLink>
      <div class="flex items-center">
        <button @click="toggleDark()" class="btn-icon">
          <Icon size="18" name="heroicons:moon" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { isDark, toggleDark } = useTheme();
</script>
