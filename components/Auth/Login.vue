<script setup lang="ts">
const login_email = ref<string>('');
const login_password = ref<string>('');
const error = ref<boolean>(false);
</script>

<template>
  <div class="p-8 flex flex-col">

    <span class="my-12 text-pretty text-xl">Login Component</span>

    <label for="login_email">Email</label>
    <input 
      required 
      type="text" 
      minlength="3"
      maxlength="100" 
      name="login_email" 
      placeholder="Digite seu email" 
      class="mb-8 px-1 py-2 rounded-sm focus-visible:outline-none bg-transparent border-b" 
      :class="[error ? 'border-red-800' : 'border-zinc-800']" 
      v-model="login_email" 
      @input="error = false"
    >
   
    <label for="login_password">Senha</label>
    <input 
      required 
      type="text" 
      minlength="3"
      maxlength="100" 
      name="login_password" 
      placeholder="Digite sua senha" 
      class="mb-2 px-1 py-2 rounded-sm focus-visible:outline-none bg-transparent border-b" 
      :class="[error ? 'border-red-800' : 'border-zinc-800']" 
      v-model="login_password" 
      @input="error = false"
    >
    
    <NuxtLink class="mb-4 flex flex-row-reverse font-medium text-sm" href="/" target="_self">Esqueci minha senha</NuxtLink>

    <div class="my-4 flex justify-center">
      <button class="py-2 w-80 bg-zinc-800 text-zinc-100 rounded-sm">Entrar</button>
    </div>

    <div class="flex justify-center items-center gap-1">
      <span> Não possui usuário?</span>
      <NuxtLink class="font-medium" href="/subscribe" target="_self">Criar usuário</NuxtLink>
    </div>

  </div>
</template>