<script setup>
import {useRoute} from 'vue-router'

const route=useRoute()

const productId = route.params.productId
const cupon = route.query.cupon
</script>

<template>
    <div>
        <h3>Product Details </h3>
        <p>productId:<strong>{{ productId}}</strong></p>
        <p>Cupon:<strong>{{ cupon}}</strong></p>
    </div>
</template>

<style scoped></style>