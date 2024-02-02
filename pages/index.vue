
<script setup lang="ts">

const { status, data, signIn, signOut, refresh   } = useAuth()

  // const [status,sign, loading] = useSession()


  
  const loggedIn = computed(() => status.value==='authenticated')


  async function handleSignIn() {
    await signIn()
  }
  async function handleSignOut() {
    await signOut()
  }
</script>


<template>
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">Home</NuxtLink>
      <span v-if="loggedIn">{{ data.user.name }}</span>

    </div>
  </nav>


  <div class="container mt-4">
      <h1>CRUD</h1>
      
      <button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
      <button v-else @click="handleSignIn">Sign Inn</button>




  </div>

</template>