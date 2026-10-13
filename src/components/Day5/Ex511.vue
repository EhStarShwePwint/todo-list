<script setup>
    import { toTypedSchema, yup } from '@vee-validate/yup'
    import { useForm } from 'vee-validate'
    import * as yup from 'yup'

    const schema=toTypedSchema(
        yup.object({
            name:yup.string().required('Name is required'),
            email:yup.string().required('Email is required').email('Enter a valid email'),
            password:yup.string().required('Password is required').min(8,'Password must be at least 8 characters')
        })
    )

    const {defineField, errors, handleSubmit, resetForm}=useForm({
        validationSchema: schema
    })

    const [name,nameAttrs]=defineField('name')
    const [email,emailAttrs]=defineField('email')
    const [password,passwordAttrs]=defineField('password')

    const onSubmit =handleSubmit((values)=>{
        alert('Registration successful!')
        console.log(values)
    })
</script>

<template>
   <form @submit="onSubmit">
         <div>
        <label>Name:</label>
        <input type="text" v-model="name" v-bind="nameAttrs" placeholder="Enter your name">
        <p v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" v-model="email" v-bind="emailAttrs" placeholder="Enter your email">
            <p v-if="errors.email">{{ errors.email}}</p>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" v-model="password" v-bind="passwordAttrs" placeholder="Enter your password">
            <p v-if="errors.password">{{ errors.password }}</p>
        </div>
        <button type="submit">Submit</button>
   </form>
</template>

<style scoped>
</style>