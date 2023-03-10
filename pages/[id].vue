<template>
  <div>
    <main class="mx-auto max-w-6xl pt-10">
      <AddBoard @submit="createBoard" />
      <SimpleBar :options="{ timeout: 5000 }" class="overflow-x-auto pb-5">
        <draggable
          item-key="id"
          class="mt-10 flex w-full flex-nowrap gap-10"
          v-model="myBoards"
        >
          <template #item="{ element, index }">
            <TransitionFade group mode="out-in">
              <div
                class="flex min-h-[300px] w-[300px] shrink-0 flex-col rounded-xl border border-dashed bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <div class="grow">
                  <div class="flex items-center justify-between gap-x-2">
                    <input
                      v-model="element.name"
                      type="text"
                      class="border-opacity-40 py-2 px-3 hover:border-opacity-100 dark:border-opacity-30 dark:hover:border-opacity-100"
                    />
                    <div class="flex items-center gap-2">
                      <button
                        @click="removeBoard(index)"
                        class="btn-icon ignore-elements"
                      >
                        <Icon size="18" name="heroicons:trash" />
                      </button>
                    </div>
                  </div>

                  <!-- list of tasks -->
                  <div class="mt-5">
                    <draggable
                      item-key="id"
                      class="flex min-h-[200px] flex-col gap-5"
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
                    class="btn-ghost w-full"
                  >
                    Add task
                  </button>
                </div>
              </div>
            </TransitionFade>
          </template>
        </draggable>
      </SimpleBar>
    </main>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";
import { SimpleBar } from "simplebar-vue3";

const defaultBoards = [
  { id: uuidv4(), name: "Backlog", tasks: [] },
  { id: uuidv4(), name: "In progress", tasks: [] },
  { id: uuidv4(), name: "Testing", tasks: [] },
  { id: uuidv4(), name: "Done", tasks: [] },
];

const myBoards = ref<typeof defaultBoards>(defaultBoards);

if (process.client) {
  useToast().success("Default boards loaded");
}

const createBoard = (name: string) => {
  myBoards.value.push({ id: uuidv4(), name, tasks: [] });
  useToast().success("Board added");
};

const addTask = (board: any, index: number) => {
  board.tasks.push({
    id: board.tasks.length + 1 + Date.now().toString(),
    name: "New task",
  });
};

const removeBoard = (index: number) => {
  myBoards.value.splice(index, 1);
  useToast().info("Board removed");
};
</script>
