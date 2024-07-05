<script setup lang="ts">
const routeName = computed(() => {  
  return useRoute().name;
})

console.log(routeName);

</script>

<template>
  <Auth>
    <AuthSubscribe v-if="routeName === 'subscribe'" /> 
    <AuthLogin v-else /> 
  </Auth>
</template>



