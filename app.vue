<script setup lang="ts">
const { status } = useAuth()
const loggedIn = computed(() => status.value === 'authenticated')
</script>

<template>
  <div>
    <NuxtPage />
    
  </div>
</template>
