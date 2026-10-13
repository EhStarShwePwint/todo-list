<script setup>
import { useRoute} from 'vue-router'

const route = useRoute()
const userId=route.params.id
const userRole=route.query.role
</script>

<template>
   <div class="profile">
    <h2>User's Profile Detail</h2>
    <p>User ID: <strong>{{ userId}}</strong></p>
    <p>Role:<strong>{{ userRole}}</strong></p>
   </div>
</template>
