<script setup lang="ts">
const login_email = ref<string>('');
const login_password = ref<string>('');
const error = ref<boolean>(false);

function onSubmit() {
  error.value = true;
}

</script>

<template>
  <div class="p-8 flex flex-col">

    <span class="text-pretty text-2xl">Bem vindo ao sua plataforma de projetos
      <b class="font-medium">My Trello</b> 
    </span>
    <span class="mb-8 text-pretty">Um serviço oferecido por 
      <b class="font-medium">My Life Plataform</b>
    </span>

    <label for="login_email">Email</label>
    <input 
      required 
      type="text" 
      minlength="3"
      maxlength="100" 
      name="login_email" 
      placeholder="Digite seu email" 
      class="px-1 py-2 rounded-sm focus-visible:outline-none bg-transparent border-b" 
      :class="[error ? 'border-red-800' : 'border-zinc-800']" 
      v-model="login_email" 
      @input="error = false"
    >
   
    <span class="mt-1 mb-8 text-red-800 text-sm" v-if="error">Email incorreto!</span>

    <label for="login_password" :class="error ? '': 'mt-8'">Senha</label>
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
    
    <span class="mt-1 text-red-800 text-sm" v-if="error">Senha incorreta!</span>

    <NuxtLink class="mb-4 flex flex-row-reverse font-medium text-sm" to="/" target="_self">Esqueci minha senha</NuxtLink>

    <div class="my-4 flex justify-center">
      <button class="py-2 w-80 bg-zinc-800 text-zinc-100 rounded-sm" @click.prevent="onSubmit">Entrar</button>
    </div>

    <div class="flex justify-center items-center gap-1">
      <span> Não possui usuário?</span>
      <NuxtLink class="font-medium" to="/subscribe" target="_self">Criar usuário</NuxtLink>
    </div>

  </div>
</template>

<style scoped>
::-webkit-input-placeholder {
  color: white;
}

:-moz-placeholder { 
  color: white;  
}

::-moz-placeholder {  
  color: white;  
}

:-ms-input-placeholder {  
  color: white;  
}
</style>