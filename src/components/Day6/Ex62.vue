<script setup>
    import {ref, watch, watchEffect} from 'vue'
    // const username=ref('')
    // watch(username,(oldname,newname)=>{
    //     console.log("Old:",oldname),
    //     console.log("New:",newname)
    // })
    const price=ref("1000")
    watchEffect(()=>{
        console.log('Price:',price.value)
    }
    )
</script>

<template>
    <h3>watch/watchEffect</h3>
    <!-- <div>
        <label>Username: </label>
        <input type="text" v-model="username" placeholder="Enter your name">
    </div>
    <div>
        <p>Username: {{ username }}</p>
    </div> -->
</template>

<style scoped></style>