<script setup lang="ts">
import { Search, ListFilter } from 'lucide-vue-next';

</script>

<template>
  <div class="flex flex-row items-center m-8 gap-8">
    
    <button class="flex flex-row items-center p-3 gap-2 bg-zinc-800 rounded-md">
      <ListFilter color="#FFF" />
      <span class="text-white text-sm">Filtrar</span> 
    </button>

    <div class="flex flex-row items-center w-full p-3 gap-2 bg-white rounded-md">
      <Search color="#3f3f46" />
      <input type="text" class="w-full bg-transparent focus-visible:outline-none" placeholder="Busque por cards, assuntos ou responsáveis" />
    </div>

  </div>
</template>