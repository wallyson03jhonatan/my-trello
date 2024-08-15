<script setup lang="ts">
import { Plus } from 'lucide-vue-next';

const props = defineProps<{
  size?: number
  rounded?: string
  bgColor?: string
  iconColor?: string
  positionStyle?: string
}>();

console.log(props);


</script>

<template>
  <div class="p-2" :class="bgColor ?? 'bg-transparent' ">
    <Plus color="#000" :size="32" stroke-width="1" />
  </div>
</template>
