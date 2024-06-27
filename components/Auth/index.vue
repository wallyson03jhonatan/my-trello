<script setup lang="ts">

const imagesColors = [
  'blue',
  'green',
  'yellow',
  'pink',
]
const setRandomImageIndex = Math.floor(Math.random() * imagesColors.length);
const image = `/${imagesColors[setRandomImageIndex]}_auth.jpeg`;

const bgColorRGBA = computed(() => {
  const color = imagesColors[setRandomImageIndex];
  const opacity = 0.3; 
  return `rgba(${getColorRGB(color)}, ${opacity})`;
});

function getColorRGB(color: string) {
  switch (color) {
    case 'blue':
      return '55, 147, 204';
    case 'green':
      return '50, 118, 112';
    case 'yellow':
      return '197, 108, 19';
    case 'pink':
      return '177, 105, 221';
    default:
      return '0, 0, 0';
  }
}

</script>

<template>
  <div class="relative flex max-w-4xl my-20 mx-auto shadow-effect fix-height">
      <NuxtImg :src="image" class="h-full w-full" />
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 glass-effect">
        <slot />
      </div>
  </div>
</template>


<style scoped>
.glass-effect {
  background-color: v-bind(bgColorRGBA);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
</style>