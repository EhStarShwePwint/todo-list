<script setup>
import { reactive } from 'vue';
import { email } from 'zod';

    const fields=reactive([
        {name:'username',label:'Username:'},
        {name:'email',label:'Email:'},
        {name:'password',label:'Password:'}
    ])
</script>

<template>
    <div v-for="field in fields" :key="field.name">
        <label>{{ field.label }}</label>
        <input :type="field.type">
    </div>
</template>

<style scoped></style>