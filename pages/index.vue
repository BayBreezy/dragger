<template>
  <div>
    <main>
      <section
        class="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-4"
      >
        <NuxtLink
          to="/1"
          class="rounded-xl border-2 border-gray-200 px-4 py-5 transition-colors hover:border-primary dark:border-gray-800/50 dark:hover:border-primary-600"
        >
          <p class="text-lg font-semibold">Board 1</p>
          <p class="mt-2 text-sm opacity-60">4 boards</p>
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
