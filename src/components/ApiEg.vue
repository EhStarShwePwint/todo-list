<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
    const products = ref([])
    const isloading = ref(true)
    const errorMessage = ref('')

    const fetchProducts= async() => {
        try {
            isloading.value = true
            const response = await axios.get('https://fakestoreapi.com/products')
            products.value = response.data
        } catch (error) {
            errorMessage.value="Data ဆွဲယူရာတွင် အမှားအယွင်းရှိနေပါသည်။"
            console.error(error)
        }finally{
            isloading.value = false
        }
    }
    onMounted(()=>{
         fetchProducts()
    }
    )
</script>

<template>
    <div class="api-container">
        <h2> Products List</h2>
        <div v-if="isloading">
            loading.....
        </div>
        <div v-else-if="errorMessage" class="error">
            {{ errorMessage}}
        </div>
        <div v-else>
           <li v-for="product in products" :key="product.id">
                    <!-- 💡 user.id အစား product.id ပြောင်းသည်၊ product.name အစား product.title ပြောင်းသည် -->
                    <strong>{{ product.title }}</strong> - ${{ product.price }}
            </li>

        </div>
    </div>
</template>

<style scoped>
.api-container {padding: 20px; max-width: 500px;}
.error {color: red; font-weight:bold;}
li{
    padding: 8px 0;border-bottom:1px solid #eee; list-style: none;
}
</style>