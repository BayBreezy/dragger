<template>
  <div>
    <HPopover v-slot="{ close }">
      <HPopoverButton class="btn px-7 py-3">Add Board</HPopoverButton>

      <TransitionSlide :offset="[0, '-30%']">
        <HPopoverPanel class="absolute z-20 mt-3 w-72">
          <div
            class="rounded-lg bg-white/80 p-3 shadow ring-1 ring-gray-100 backdrop-blur dark:bg-gray-800/90 dark:ring-gray-600/30"
          >
            <form @submit.prevent="submit">
              <label class="label" for="board">Name</label>
              <input
                placeholder="Enter board name"
                v-model="name"
                required
                type="text"
                name="board"
                id="board"
              />
              <button
                type="submit"
                @click="close()"
                class="btn mt-4 block w-full py-3"
              >
                Create board
              </button>
            </form>
          </div>
        </HPopoverPanel>
      </TransitionSlide>
    </HPopover>
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const emit = defineEmits(["submit"]);

const submit = () => {
  emit("submit", name.value);
  name.value = "";
};
</script>
