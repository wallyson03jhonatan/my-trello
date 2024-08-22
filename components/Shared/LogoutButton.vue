<script setup lang="ts">
import { LogOut } from 'lucide-vue-next'
</script>

<template>
  <div class="absolute bottom-4 right-2 p-2 bg-zinc-800 rounded-md cursor-pointer" title="Sair">
    <NuxtLink to="/logout" target="_self">
      <LogOut :size="24" class="rotate-180" color="#ef4444"/>
    </NuxtLink>
  </div>
</template>