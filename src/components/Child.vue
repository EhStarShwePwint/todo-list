<script setup>
import {ref} from 'vue'
const inputText=ref('')
const emit=defineEmits(['send'])
console.log(inputText)
</script>
<template>
    <input v-model="inputText">
    <button @click="emit('send',inputText)">Send</button>
</template>
<style scoped>
</style>