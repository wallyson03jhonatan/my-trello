<script setup lang="ts">

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
    <h1 class="text-xl text-zinc-300 font-bold">My Trello</h1>
    <h3 class="text-base text-zinc-500 font-medium">My Life App</h3>

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
  </div>
</template>