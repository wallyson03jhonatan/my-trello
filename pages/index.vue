<script setup lang="ts">
definePageMeta({
  layout: window.innerWidth < 768 ? 'mobile' : 'desktop',
  middleware: "auth"
});
</script>

<template>
  <div>Home Route</div>
</template>
