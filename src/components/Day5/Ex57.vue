<script setup>
    import {reactive, ref} from 'vue'
    const Hobbies=ref([])
</script>

<template>
    <div>
        <label>
            <input type="checkbox" v-model="Hobbies" value="Reading">
            Reading
        </label>
        <label>
            <input type="checkbox" v-model="Hobbies" value="dancing">
            dancing
        </label>
        <label>
            <input type="checkbox" v-model="Hobbies" value="Coding">
            Coding
        </label>
    </div>
    <p>{{ Hobbies.join(',')}}</p>
</template>

<style scoped>
</style>