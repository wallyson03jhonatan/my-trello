<script setup lang="ts">
import { Plus } from 'lucide-vue-next';

defineProps<{
  size?: number
  rounded?: string
  bgColor?: string
  iconColor?: string
  borderStyle?: string
  positionStyle?: string
}>();

</script>

<template>
  <div class="p-1 cursor-pointer" :class="[bgColor ?? 'bg-transparent', positionStyle, rounded, borderStyle ]">
    <Plus :color="iconColor" :size="size" stroke-width="1" />
  </div>
</template>
