<script setup lang="ts">
const isMobile = ref<boolean>(window.innerWidth < 768 || false);

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth < 768 || false;
});
</script>

<template>
  <NuxtLayout :name="isMobile ? 'mobile' : 'desktop'"/> 
</template>
