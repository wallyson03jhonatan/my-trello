<script setup lang="ts">
import { CircleUserRound } from 'lucide-vue-next'

</script>

<template>
  <div class="flex flex-row justify-between items-center my-5 mx-8 gap-8">
    
    <div class="flex flex-row gap-8">
      <button>Cards</button>
      <button>Relatórios</button>
    </div>

    <div class="flex flex-row items-center gap-2">
      <span>Naruto Uzumaki</span>
      <CircleUserRound :color="colorPicker()" :size="32" />
    </div>
  </div>
</template>