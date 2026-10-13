<script setup>
    import {ref} from 'vue'
    const name=ref('')
    const email=ref('')
    const password=ref('')
    const errors=ref({})
    const success=ref('')

    function validateForm(){
        errors.value={}
        success.value=''

        if(name.value.trim()===''){
            errors.value.name = "The name field is required"
        }

        if(email.value.trim()===''){
            errors.value.email = "The email field is required"
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
            errors.value.email = "email is invalid"
        }

        if(password.value.length < 8){
            errors.value.password = "Password must be at least 8 characters"
        }

        if(Object.keys(errors.value).length === 0){
            success.value = "Registration Sucessful!"
            alert("Registration Sucessful!")
        }
    }

</script>

<template>
    <form @submit.prevent.stop="validateForm">
        <div>
            <label>Name:
            <input type="text" v-model="name" placeholder="Enter your name">
        </label>
            <div v-if="errors.name" style="color:red">
                {{ errors.name }}
            </div>
        </div>
        <div>
            <label>Email:
            <input type="email" v-model="email" placeholder="Enter your email">
            </label>
            <div v-if="errors.email" style="color:red">
                {{ errors.email }}
            </div>
        </div>
        <div>
            <label>Password:
            <input type="password" v-model="password" placeholder="Enter your password">
            </label>
            <div v-if="errors.password" style="color:red">
                {{ errors.password }}
            </div>
        </div>
        <div v-if="success" style="color:green">
            {{ success }}
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped></style>