<script setup>
    import {computed, ref} from 'vue'
    // const price=ref(1000)
    // const amount=ref(100)
    const marks = ref(30)
    const status=computed(()=>{
        if(marks.value >=40){
            return "Pass"
        }
        else{
            return "Fail"
        }
   } )
</script>

<template>
    <h3>Computed</h3>
    <!-- <div>
        <label>Unit Price</label>
        <input type="text" v-model="price" placeholder="Enter Price">
    </div>
    <div>
        <label>Amount</label>
        <input type="text" v-model="amount" placeholder="Enter amount">
    </div> -->
    <div>
        <!-- <p>Price: {{ price }}</p>
        <p>Amount: {{ amount }}</p> 
        <p>Total: {{ total }}</p>-->
        <p>Marks:{{ marks }}</p>
        <p>Status:{{ status }}</p>
    </div>
</template>

<style scoped></style>