<script setup>
    import {ref} from 'vue'
    const name=ref('Aung Aung')
    const age=ref(20)
    const course=ref('Select your course')
</script>

<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <select v-model="course">Course
            <option value="">Select your course</option>
            <option value="Vue.js">Vue.js</option>
            <option value="Node.js">Node.js</option>
            <option value="Javascript.js">Javascript.js</option>
        </select>
    </div>
    <div>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <p>{{ course }}</p>
    </div>
</template>

<style scoped>
</style>