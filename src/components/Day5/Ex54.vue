<script setup> 
    import {ref} from 'vue'
    const country=ref('Myanmar')
</script>

<template>
    <select v-model="country">
        <option value="Myanmar">Myanmar</option>
        <option value="Thailand">Thailand</option>
        <option value="Japan">Japan</option>
    </select>
    <p>{{ country }}</p>
</template>

<style scoped>

</style>