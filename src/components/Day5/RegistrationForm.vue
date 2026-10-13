<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup' //import {z} from 'zop'

const schema = toTypedSchema(
    yup.object({
        name:yup.string().required("Name field is required"),//name:z.string().min(1,"Name field is required")
        email:yup.string().required("Email field is required").email("Email must be valid"),//...
        password:yup.string().required("Password field is required").min(8,"Password must be at least 8 characters")//...
    })
)

const {defineField, errors, handleSubmit,resetForm}=useForm({
 validationSchema:schema
})

const [name,nameAttrs]=defineField('name');
const [email,emailAttrs]=defineField('email');
const [password,passwordAttrs]=defineField('password');

const onSubmit=handleSubmit((values)=>{
    alert('Registration Successful!')
    console.log(values)
})
</script>

<template>
    <form @submit="onSubmit">
        <div>
            <label>Name: </label>
            <input type="text" v-model="name" v-bind="nameAttrs" placeholder="Enter your name">
            <p v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" v-model="email" v-bind="emailAttrs" placeholder="Enter your name">
            <p v-if="errors.email">{{ errors.email }}</p>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" v-model="password" v-bind="passwordAttrs" placeholder="Enter your name">
            <p v-if="errors.password">{{ errors.password }}</p>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped></style>