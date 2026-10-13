<script setup>
    import {reactive, watch, watchEffect} from 'vue'
    const user=reactive({
        name:"Su Su",
        age:22,
        address:{
            city:"Bago"        }
    })
    
   watch(
    () => user.name,
    (newValue, oldValue) => {
        console.log('User profile changed!')
        console.log('Old name:', oldValue)
        console.log('New name:', newValue)
  },
    {
        immediate:true,
        deep:true

    }
)
    watchEffect(()=>{
        console.log('Name:',user.name),
        console.log('Age: ',user.age),
        console.log('City:',user.address.city)
    })



</script>

<template>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>City: {{ user.address.city }}</p>

    <button @click="user.name='Ehstar'">Change Name</button>
    <button @click="user.age=23">Increase Age</button>
    <button @click="user.address.city='Yangon'">Change City</button>
</template>

<style scoped></style>