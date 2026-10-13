<script setup>
    import {ref} from 'vue'
    const showpassword=ref(true)
</script>

<template>
    <h3>Password(Show/Hide:Dynamic)</h3>
    <input :type="showpassword?'text':'password'" placeholder="Enter password">
    <button @click="showpassword=!showpassword">
        {{ showpassword? 'Hide' : 'Show' }}Password
    </button>
    <p v-show="showpassword">Hello</p>
</template>

<style scoped></style>