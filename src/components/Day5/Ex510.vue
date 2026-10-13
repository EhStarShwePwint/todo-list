<script setup>
    import {ref} from 'vue'
    const name=ref('')
    const email=ref('')
    const password=ref('')
    const errors=ref({})
    const success = ref('')
    function validateForm(){

        errors.value = {}
        success.value=''

        if(name.value.trim()===''){
            errors.value.name = "Name is required"
        }

        if(!email.value.trim()){
            errors.value.email = "Email is required"
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) 
        {
        errors.value.email = 'Invalid email'
        }

        if (password.value.length < 8) {
        errors.value.password ='Password must be at least 8 characters'
        }

        if (Object.keys(errors.value).length === 0) {
        success.value = 'Registration Successful!'
        alert('Registration Successful!')
        }
    }


</script>

<template>
    <form @submit.prevent.stop="validateForm">
        <div>
            <label>
                Name:
                <input type="text" v-model="name" placeholder="Enter your name">
            </label>
            <p v-if="errors.name" style="color: red">
            {{ errors.name }}
            </p>
        </div>
        <div>
            <label>
                Email:
                <input type="email" v-model="email" placeholder="Enter your Email">
            </label>
            <p v-if="errors.email" style="color: red">
            {{ errors.email }}
            </p>
        </div>
        <div>
            <label>
                Password:
                <input type="password" v-model="password" placeholder="Enter your password">
            </label>
            <p v-if="errors.password" style="color: red">
            {{ errors.password }}
            </p>
        </div>
         <p v-if="success" style="color: green">
            {{ success }}
        </p>
        <button type="submit">Submit</button>
    </form>
    

    

    
</template>

<style scoped></style>