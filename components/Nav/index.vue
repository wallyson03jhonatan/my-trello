<script setup lang="ts">
import { Grid2x2Check } from 'lucide-vue-next'

const projects = [
  'My life',
  'My Trello',
  'My Finances',
  'My Notes',
  'My Schedule',
]

</script>

<template>
  <div>

    <div class="flex items-start gap-2">
      <Grid2x2Check :size="48" color="#065f46" stroke-width="1" />
      <div class="flex flex-col">
        <h1 class="text-xl text-zinc-300 font-bold">My Trello</h1>
        <h3 class="text-sm text-zinc-500 font-medium">My Life App</h3>
      </div>
    </div>

    <div class="mt-8">
      <div class="flex items-center justify-between">
        <span class="text-zinc-300 font-semibold">Projetos ({{ projects.length }})</span>
        <button>Add</button>
      </div>
      
      <div class="mt-4 pl-2">
        <div v-for="project, index in projects" :key="index" class="flex justify-between items-center py-2">
          <span class="text-sm text-zinc-300 font-medium">{{ project }}</span>
          <span>Sino</span>
        </div>
      </div>
    </div>

    <div>Project Members</div>

    <div>Logout</div>
    
  </div>
</template>