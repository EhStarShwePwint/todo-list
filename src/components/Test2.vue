<script setup>
    const props = defineProps({
        title:{
            type:String,
            required:true
        }
    })
</script>

<template>
     <h2>{{props.title}}</h2>
     <div>
        <slot></slot>
     </div>
</template>

<script setup>
</script>