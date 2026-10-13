<template>
  <!-- Event Modifier (.prevent) -->
  <form @submit.prevent="handleSubmit" class="todo-form">
    <div class="form-grid">
      <!-- Input Text Control & v-model -->
      <input 
        type="text" 
        v-model.trim="taskName" 
        placeholder="What needs to be done?"
        :class="{ 'is-invalid': error }"
        class="input-field"
      />
      
      <!-- Select Control -->
      <select v-model="category" class="select-field">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>

    <div class="form-footer">
      <!-- Checkbox Control -->
      <label class="checkbox-label">
        <input type="checkbox" v-model="isImportant" />
        <span class="custom-checkbox">Mark as Important ⭐</span>
      </label>

      <button type="submit" class="btn-submit">Add Task</button>
    </div>
    
    <!-- Conditional Rendering (v-if) -->
    <p v-if="error" class="error-text">⚠️ {{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-todo'])

const taskName = ref('')
const category = ref('Work')
const isImportant = ref(false)
const error = ref('')

const handleSubmit = () => {
  // Custom Form Validation Logic
  if (!taskName.value) {
    error.value = 'Task title cannot be empty.'
    return
  }
  
  error.value = ''
  
  // Child to Parent Communication (emit)
  emit('add-todo', {
    title: taskName.value,
    category: category.value,
    isImportant: isImportant.value
  })

  // Form Reset
  taskName.value = ''
  category.value = 'Work'
  isImportant.value = false
}
</script>

<style scoped>
.todo-form {
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
}
.form-grid {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}
.input-field {
  flex: 2;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}
.input-field.is-invalid {
  border-color: var(--danger);
  background-color: #fef2f2;
}
.select-field {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
}
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkbox-label {
  font-size: 14px;
  color: #64748b;
  cursor: pointer;
}
.btn-submit {
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-submit:hover {
  background: var(--primary-hover);
}
.error-text {
  color: var(--danger);
  font-size: 13px;
  margin: 8px 0 0 0;
  font-weight: 500;
}
</style>
