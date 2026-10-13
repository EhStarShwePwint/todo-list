<script setup>
const props = defineProps({
   user:Object
})
</script>
<template>
    <h2>User Card</h2>
    <div>
        <p>{{props.user.name}}</p>
        <p>{{props.user.age}}</p>
        <p>{{props.user.isOnline}}</p>
    </div>
    

</template>
<style scoped>
</style>