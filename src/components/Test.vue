<script setup>
const props=defineProps({
    user:Object
})
</script>
<template>
    <div>
        <p>Name: {{props.user.name}}</p>
        <p>Age: {{props.user.age}}</p>
        <p>City: {{props.user.city}}</p>
        <div>
            <p v-if="props.user.isOnline">Online</p>
            <p v-else>Offline</p>
        </div>
        <div>
            <p v-if="props.user.isStudent">Student</p>
            <p v-else>Not Student</p>
        </div>
        <p>Skills: {{props.user.skills}}</p>
        <hr>
    </div>
</template>
<style scoped>
</style>