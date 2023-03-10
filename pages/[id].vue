<template>
  <div>
    <main class="mx-auto max-w-6xl pt-10">
      <AddBoard @submit="createBoard" />
      <div class="overflow-x-auto">
        <draggable
          item-key="id"
          class="mt-10 flex w-full flex-nowrap gap-10"
          v-model="myBoards"
        >
          <template #item="{ element, index }">
            <TransitionFade group mode="out-in">
              <div
                class="flex min-h-[300px] w-[250px] shrink-0 flex-col rounded-xl border border-dashed bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <div class="grow">
                  <div class="flex items-center justify-between">
                    <p class="ignore-elements font-semibold">
                      {{ element.name }}
                    </p>
                    <button class="btn-icon ignore-elements">
                      <Icon size="18" name="heroicons:pencil" />
                    </button>
                  </div>

                  <!-- list of tasks -->
                  <div class="mt-5">
                    <draggable
                      item-key="id"
                      class="flex flex-col gap-5"
                      group="tasks"
                      v-model="element.tasks"
                    >
                      <template #item="{ element: child, index: k }">
                        <div
                          class="flex items-center justify-between rounded-md border p-3 dark:border-gray-700"
                        >
                          <p class="ignore-elements">{{ child.name }}</p>
                        </div>
                      </template>
                    </draggable>
                  </div>
                </div>

                <!-- Add task button -->
                <div class="mt-2">
                  <button
                    @click="addTask(element, index)"
                    class="btn-outline w-full"
                  >
                    Add task
                  </button>
                </div>
              </div>
            </TransitionFade>
          </template>
        </draggable>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";

const myBoards = ref<any[]>([]);

const createBoard = (name: string) => {
  myBoards.value.push({ id: myBoards.value.length + 1, name, tasks: [] });
};

const addTask = (board, index) => {
  board.tasks.push({
    id: board.tasks.length + 1 + Date.now().toString(),
    name: "New task",
  });
};
</script>
