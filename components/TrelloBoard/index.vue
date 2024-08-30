<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Column, Task } from '@/types';
import draggable from 'vuedraggable'

const columns = useLocalStorage<Column[]>("trelloBoard", [
  {
    id: nanoid(),
    title: 'Backlog',
    tasks: [
      { id: nanoid(), title: 'Add projects modal', createdAt: new Date() },
      { id: nanoid(), title: 'Add Members modal', createdAt: new Date() },
      { id: nanoid(), title: 'Join trello with projetos', createdAt: new Date() },
      { id: nanoid(), title: 'Filter cards by title or date', createdAt: new Date() },
      { id: nanoid(), title: 'Make subscribe screen', createdAt: new Date() },
      { id: nanoid(), title: 'Make forgot password screen', createdAt: new Date() },
      { id: nanoid(), title: 'Make flow of select project -> members -> cards', createdAt: new Date() },
      { id: nanoid(), title: 'Make flow of users auth', createdAt: new Date() },
      { id: nanoid(), title: 'Adjust trello cards overflow e transition', createdAt: new Date() },
      { id: nanoid(), title: 'Adjust profile icons with sameColors cards overflow e transition', createdAt: new Date() },
      { id: nanoid(), title: 'Create mobile layout with in development message', createdAt: new Date() },      
      { id: nanoid(), title: 'Create reports dashboard', createdAt: new Date() },      
    ],
  },
  { id: nanoid(), title: 'Selected for Dev', tasks: [] },
  { id: nanoid(), title: 'In Progress', tasks: [] },
  { id: nanoid(), title: 'QA', tasks: [] },
  { id: nanoid(), title: 'Completed', tasks: [] },
],
  {
    serializer: {
      read: (value: string) => {
        return JSON.parse(value).map((column: Column) => {
          column.tasks = column.tasks.map((task: Task) => {
            task.createdAt = new Date(task.createdAt)
            return task
          })
          return column
        })
      },
      write: (value: any) => JSON.stringify(value),
    }
  }
)

const alt = useKeyModifier('Alt')

function createdColumn() {
  const column: Column = {
    id: nanoid(),
    title: '',
    tasks: [],
  }
  columns.value.push(column)
  
  nextTick(() => {
    (document.querySelector(".column:last-of-type .title-input") as HTMLInputElement).focus()
  })
}
</script>

<template>   
  <div class="flex items-start overflow-hidden m-8 gap-4">
    <draggable 
      v-model="columns" 
      group="columns"
      item-key="id"
      :animation="150"
      handle=".drag-handle"
      class="flex gap-4 items-start"
    >
      <template #item="{element: column}: {element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            <SharedDragHandle />
            <input 
              type="text"
              class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="column.title === '' ? columns = columns.filter((c) => c.id !== column.id) : null"
              v-model="column.title"
            />
          </header>
          <draggable 
            v-model="column.tasks" 
            :group="{name: 'tasks', pull: alt ? 'clone' : true}"
            handle=".drag-handle"
            item-key="id"
            :animation="300"
          >
            <template #item="{element: task}: {element: Task}">
              <div>
                <TrelloBoardShowTask 
                  :task="task" 
                  @delete="
                    column.tasks = column.tasks.filter((task) => task.id !== $event)
                  "
                />
              </div>
            </template>
          </draggable>
          <footer>
            <TrelloBoardNewTask @add="column.tasks.push($event)"/>
          </footer>
        </div>
      </template>
    </draggable>
    <button
      @click="createdColumn"
      class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
    >  
      + Add a new column
    </button>
  </div>
</template>

<style scoped></style>