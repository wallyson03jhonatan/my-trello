<script setup lang="ts">

const { data } = await useFetch('/api/projects')

console.log(data);

function addNewCotent() {
  console.log('add');
}

</script>

<template>
  <div class="relative h-screen grid grid-cols-12">
  
    <Nav class="bg-zinc-800 p-4 col-span-2" id="nav" />
  
    <div class="bg-slate-100 col-span-10">
      <Header />
      <Filter />
      <TrelloBoard  id="trelloBoard" />
    </div>

    <SharedPlusButton 
      position-style="absolute bottom-4 right-16 p-2" 
      rounded="rounded-md" 
      bg-color="bg-zinc-800" 
      icon-color="#FFF" 
      title="Adicionar"
      @click.prevent="addNewCotent"
    />
    <SharedLogoutButton />
    
  </div>
</template>

