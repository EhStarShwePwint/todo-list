<script setup>
    import {ref} from 'vue'
    const gender=ref('(none)')
</script>

<template>
    <h3>Choose gender:</h3>
    <div>
        <label>
        <input type="radio" v-model="gender" value="Male">Male
        </label>
        <label>
            <input type="radio" v-model="gender" value="FeMale">FeMale
        </label>
        <label>
            <input type="radio" v-model="gender" value="Other">Other
        </label>
    </div>
    <div>Selected gender:{{ gender }}</div>

</template>

<style scoped>
</style>