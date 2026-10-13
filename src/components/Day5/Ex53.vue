<script setup> 
    import {ref} from 'vue'
    const agreed = ref(true);
</script>

<template>
    <input type="checkbox" v-model="agreed">I agreed the term
    <p v-if="agreed">Status : aggred</p>
    <p v-else> Status: Not agreed</p>
</template>

<style scoped>

</style>