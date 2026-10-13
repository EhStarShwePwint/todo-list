import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import DetailView from '../../views/DetailView.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView 
  },
  { 
    path: '/todo/:id', 
    name: 'TodoDetail', 
    component: DetailView, 
    props: true 
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
