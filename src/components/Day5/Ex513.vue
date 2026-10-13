<script setup>
import { reactive } from 'vue'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' }
]

const form = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <div v-for="field in fields" :key="field.name">
    <label>{{ field.label }}</label>
    <input
      :type="field.type"
      v-model="form[field.name]"
    />
  </div>
</template>