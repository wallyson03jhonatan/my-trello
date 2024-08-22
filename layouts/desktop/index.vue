<script setup lang="ts"></script>

<template>
  <div class="relative h-screen grid grid-cols-12">
  
    <Nav class="bg-zinc-800 p-4 col-span-2" id="nav" />
  
    <div class="bg-slate-100 col-span-10">
      <Header />
      <Filter />
      <TrelloBoard  id="trelloBoard" />
    </div>

    <SharedLogoutButton />
  </div>
</template>

