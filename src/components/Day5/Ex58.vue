<script setup>
import {ref} from 'vue'
const name=ref('')
const age=ref('')
const gender=ref('')
const hobbies=ref('')
const skills=ref([])
function submitForm(){
    alert('Form Submitted')
}
</script>

<template>
    <form @submit.prevent.stop="submitForm">
        <div>
            <h3>Name:</h3>
            <input type="text" v-model="name" placeholder="Enter your name">
        </div>
        <br>
        <div>
            <h3>Age:</h3>
            <input type="text" v-model="age" placeholder="Enter your age">
        </div>
        <div><h3>Gender:</h3>
           <label>
                 <input type="radio" v-model="gender" value="Male">Male 
           </label>
           <label>
                 <input type="radio" v-model="gender" value="Female">Female
           </label>
        </div>
        <div>
            <h3>Hobbies:</h3>
            <select v-model="hobbies">Select your hobbies:
                <option value="Frondend">Frondend</option>
                <option value="Backend">Backend</option>
                <option value="FullStack">FullStack</option>
            </select>
        </div>
        <div>
            <h3>Skills:</h3>
            <label>
                <input type="checkbox" v-model="skills" value="Html,Css,JavaScript" >
                Html,Css,JavaScript
            </label>
            <label>
                <input type="checkbox" v-model="skills" value="Vue.js" >
                Vue.js
            </label>
            <label>
                <input type="checkbox" v-model="skills" value="Node.js" >
                Node.js
            </label>
        </div>
        <button type="submit">Submit</button>
    </form>
    <div>
        <p><b>Name:</b>{{ name }}</p>
        <p><b>Age:</b>{{ age }}</p>
        <p><b>Gender:</b>{{ gender }}</p>
        <p><b>Hobbies:</b>{{ hobbies }}</p>
        <p><b>Skills:</b>{{ skills.join(',') }}</p>
    </div>
</template>

<style scoped>
</style>