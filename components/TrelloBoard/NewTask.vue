<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Task } from '@/types'

const emit = defineEmits<{
  (e: 'add', payload: Task): void
}>()

const focused = ref(false)
const title = ref('')

function createTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault()
    emit('add', {
      id: nanoid(),
      title: title.value.trim(),
      createdAt: new Date()
    } as Task)
  }

  title.value = ''
}
</script>

<template>
  <textarea
    v-model="title"
    @keydown.tab="createTask"
    @keyup.enter="createTask"
    @focus="focused = true"
    @blur="focused = false"
    :placeholder="!focused ? 'Add a Card' : 'Enter a title for this card'"
    :class="{
      'h-8': !focused,
      'h-20': focused,
    }"
    class="focus:bg-white focus:shadow resize-none rounded w-full border-none px-2 py-1"
    style="outline: none !important;"
  />
</template>
