<script setup> 
    import {ref} from 'vue'
    const name=ref('Aung Aung')
</script>

<template>
    <input type="text" v-model="name">
    <p>Hello,{{ name }}</p>
</template>

<style scoped>

</style>