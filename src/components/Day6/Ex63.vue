<script setup>
import { reactive, watch } from 'vue';

const profile=reactive({
    name:"Su Su",
    age:23,
    address:{
        city:"Bago"
    }})

watch(
    ()=>profile,
    ()=>{
        console.log("Profile Updated!")
    },
    {deep:true}
)

profile.address.city="Yangon"
</script>

<template>
    <h3>Deep</h3>
</template>

<style scoped></style>