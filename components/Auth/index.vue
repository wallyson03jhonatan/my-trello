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
  <NuxtImg :src="image" class="h-screen w-screen" />
  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 content__size glass__effect shadow__effect rounded-sm">
    <NuxtImg :src="image" class="h-full w-1/2 invisible md:visible" />
    <div class="w-full md:w-1/2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.glass__effect {
  background-color: v-bind(bgColorRGBA);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.shadow__effect {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.content__size {
  height: calc(100vh - 20%);
  width: calc(100vw - 20%);
}
</style>