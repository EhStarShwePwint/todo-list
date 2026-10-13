<template>
  <div class="todo-card container">
    <!-- Global Component -->
    <GlobalAlert>🚀 Organize your daily routine and manage OJT goals effectively!</GlobalAlert>

    <h2>Task Management Dashboard</h2>

    <!-- Analytics Section (Computed Property State) -->
    <div class="analytics">
      <div class="stat-box">Total Tasks: <b>{{ analytics.total }}</b></div>
      <div class="stat-box">Completed: <b style="color: var(--success)">{{ analytics.completed }}</b></div>
      <div class="stat-box">Pending: <b style="color: var(--primary)">{{ analytics.pending }}</b></div>
    </div>

    <!-- Local Components Integration -->
    <TodoForm @add-todo="addNewTodo" />

    <!-- Conditional Rendering Hierarchy (v-if / v-else-if / v-else) -->
    <div v-if="loading" class="state-msg">
      🔄 Fetching default tasks from server...
    </div>
    
    <div v-else-if="todos.length === 0" class="state-msg empty-state">
      ✨ Your schedule is clear! Add a task to begin.
    </div>
    
    <div v-else class="todo-list">
      <!-- List Rendering with :key binding and tracking reactive mutations -->
      <TodoItem 
        v-for="item in todos" 
        :key="item.id" 
        :todo="item" 
        @delete-todo="deleteTodo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect, onMounted, onUnmounted, onUpdated } from 'vue'
import axios from 'axios'

// Local Components Registration

import TodoForm from '../src/components/TodoForm.vue'
import TodoItem from '../src/components/TodoItem.vue'

// Reactivity States
const todos = ref([])
const loading = ref(false)

// Computed Property to Track Derived Metrics
const analytics = computed(() => {
  const total = todos.value.length
  const completed = todos.value.filter(t => t.done).length
  return { total, completed, pending: total - completed }
})

// Array Mutation: Create Handler
const addNewTodo = (payload) => {
  todos.value.unshift({
    id: Date.now(),
    title: payload.title,
    category: payload.category,
    done: false,
    isImportant: payload.isImportant
  })
}

// Array Mutation: Delete Handler
const deleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

// Watcher with Deep & Immediate Configurations
watch(todos, (newVal) => {
  localStorage.setItem('ojt_tasks_eng', JSON.stringify(newVal))
}, { deep: true, immediate: false })

// watchEffect for structural internal Logging
watchEffect(() => {
  console.log(`Reactivity Update: Active items queue contains ${todos.value.length} tasks.`)
})

// Lifecycle Hooks (onMounted with dynamic async/await Axios processing)
onMounted(async () => {
  console.log('HomeView Component Mounted.')
  const cached = localStorage.getItem('ojt_tasks_eng')
  
  if (cached) {
    todos.value = JSON.parse(cached)
  } else {
    loading.value = true
    try {
      // HTTP Request using Axios with async/await
      const response = await axios.get('https://typicode.com')
      todos.value = response.data.map(item => ({
        id: item.id,
        title: item.title,
        category: 'Work',
        done: item.completed,
        isImportant: false
      }))
    } catch (err) {
      console.error('Failed fetching data from endpoint API:', err)
    } finally {
      loading.value = false
    }
  }
})

onUpdated(() => {
  console.log('DOM updates synced due to reactive changes.')
})

onUnmounted(() => {
  console.log('HomeView destroyed/unmounted.')
})
</script>

<style scoped>
.container { max-width: 600px; margin: 60px auto; padding: 32px; }
h2 { text-align: center; color: #0f172a; margin-top: 0; margin-bottom: 24px; font-weight: 700; }
.analytics { display: flex; justify-content: space-between; margin-bottom: 24px; gap: 12px; }
.stat-box { flex: 1; background: white; padding: 14px; border-radius: 10px; text-align: center; font-size: 14px; font-weight: 500; border: 1px solid #e2e8f0; }
.state-msg { text-align: center; color: #64748b; padding: 32px; background: rgba(0,0,0,0.01); border-radius: 10px; font-size: 14px; font-weight: 500; }
</style>
