<script setup>
    function Parentclick(){
        alert("Parent Clicked")
    }
    function Childclick(){
        alert("Button Clicked")
    }
</script>

<template>
    <div @click="Parentclick">
        Parent
        <button @click.stop="Childclick">
            Click me 
        </button>
    </div>
</template>

<style scoped>

</style>