<script setup lang="ts">
import { CircleUserRound, Grid2x2Check } from 'lucide-vue-next'

const projects = [
  'My life',
  'My Trello',
  'My Finances',
  'My Notes',
  'My Schedule',
]

const teamMembers = [
  'Naruto',
  'Sai',
  'Sasuke',
  'Sakura',
  'Yamato',
  'Kakashi',
]
</script>

<template>
  <div class="relative">

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
        <SharedPlusButton :size="18" icon-color="#d4d4d8" rounded="rounded-md" border-style="border border-zinc-500" />
      </div>
      
      <div class="mt-4">
        <div v-for="project, index in projects" :key="index" class="py-2 pl-2 cursor-pointer text-zinc-300 hover:bg-gray-500 hover:text-black hover:transition-colors hover:rounded-sm">
          <span class="text-sm font-medium">{{ project }}</span>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="flex items-center justify-between">
        <span class="text-zinc-300 font-semibold">Membros do time ({{ teamMembers.length }})</span>
        <SharedPlusButton :size="18" icon-color="#d4d4d8" rounded="rounded-md" border-style="border border-zinc-500" />
      </div>

      <div class="mt-4">
        <div v-for="member, index in teamMembers" :key="index" class="cursor-pointer text-zinc-300 hover:bg-gray-500 hover:text-black hover:transition-colors hover:rounded-sm">
          <div class="flex items-center gap-2 py-2 pl-2">
            <CircleUserRound :color="colorPicker()" />
            <span class="text-sm  font-medium">{{ member }}</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>