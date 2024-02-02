<script setup lang="ts">
    definePageMeta({
        auth:{
            unauthenticatedOnly: true,
            navigateAuthenticatedTo: '/protected'
        }
    })
</script>

<template>
    <div>
        <b>Hi, iam guest only</b>
    </div>
</template>