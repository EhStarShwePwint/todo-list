<script setup>
import { ref } from 'vue'

const visible = ref(true)
</script>

<template>
  <div v-show="visible" class="alert-box">
    <div class="alert-content">
      <!-- Component Slots Basics -->
      <slot>Default Alert Message</slot>
    </div>
    <button @click="visible = false" class="close-btn">&times;</button>
  </div>
</template>



<style scoped>
.alert-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #e0e7ff;
  border-left: 4px solid var(--primary);
  border-radius: 6px;
  margin-bottom: 20px;
}
.alert-content {
  color: #3730a3;
  font-size: 14px;
  font-weight: 500;
}
.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #3730a3;
  cursor: pointer;
}
</style>
