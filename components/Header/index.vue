<script setup lang="ts">
import { Squircle } from 'lucide-vue-next';

</script>

<template>
  <div class="flex flex-row justify-between items-center my-5 mx-8 gap-8">
    
    <div class="flex flex-row gap-8">
      <button>Cards</button>
      <button>Relatórios</button>
      <SharedPlusButton bg-color="bg-red-500" />
    </div>

    <div class="flex flex-row items-center gap-2">
      <span>Naruto Uzumaki</span>
      <Squircle :size="48" color="#065f46" stroke-width="1" />
    </div>
  </div>
</template>