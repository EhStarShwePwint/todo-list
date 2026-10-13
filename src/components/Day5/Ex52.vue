<script setup> 
    import {ref} from 'vue'
    const texts=ref('Hello I am here')
</script>

<template>
   <textarea v-model="texts"></textarea>
   <p>{{ texts }}</p>
</template>

<style scoped>

</style>