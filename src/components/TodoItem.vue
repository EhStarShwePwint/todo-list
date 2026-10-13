<template>
  <!-- Dynamic Classes (:class) & Inline Styles (:style) -->
  <div 
    class="todo-item" 
    :class="{ 'completed': todo.done, 'important-item': todo.isImportant }"
    :style="{ borderLeftColor: todo.isImportant ? 'var(--danger)' : 'var(--primary)' }"
  >
    <div class="todo-content">
      <input type="checkbox" v-model="todo.done" class="todo-checkbox" />
      <span class="title">{{ todo.title }}</span>
      <span class="badge">{{ todo.category }}</span>
    </div>

    <div class="actions">
      <!-- 🎯 RouterLink Navigation passing Route Params & Queries -->
      <RouterLink 
        :to="{ name: 'TodoDetail', params: { id: todo.id }, query: { title: todo.title } }" 
        class="btn-view"
      >
        Details
      </RouterLink>
      
      <!-- Event Modifier (.stop) to prevent outer unintended triggers -->
      <button @click.stop="$emit('delete-todo', todo.id)" class="btn-delete">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Props Validation with type, required, and default properties
defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => ({ id: 0, title: '', category: 'Work', done: false, isImportant: false })
  }
})

defineEmits(['delete-todo'])
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: white;
  margin-bottom: 12px;
  border-radius: 10px;
  border-left: 5px solid #eee;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  transition: transform 0.2s, box-shadow 0.2s;
}
.todo-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}
.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.todo-checkbox {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  cursor: pointer;
}
.title {
  font-size: 15px;
  font-weight: 500;
}
.completed .title {
  text-decoration: line-through;
  color: #94a3b8;
}
.important-item {
  background: #fef2f2;
}
.badge {
  background: #f1f5f9;
  color: #64748b;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 20px;
  font-weight: 500;
}
.actions {
  display: flex;
  gap: 8px;
}
.btn-view {
  background: #eff6ff;
  color: #2563eb;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}
.btn-view:hover {
  background: #dbeafe;
}
.btn-delete {
  background: #fef2f2;
  color: var(--danger);
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.btn-delete:hover {
  background: #fee2e2;
}
</style>
