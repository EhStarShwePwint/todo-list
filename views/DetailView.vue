<template>
  <div class="todo-card detail-container">
    <h3>🔍 Task Metadata Specifications</h3>
    <hr class="divider" />
    
    <div class="detail-body">
      <!-- Accessing Route Params & Query Strings -->
      <p>🧬 <b>Route Parameter ID:</b> <span class="highlight">{{ $route.params.id }}</span></p>
      <p>📋 <b>Title Query String:</b> <span class="highlight">{{ $route.query.title || 'N/A' }}</span></p>
    </div>
    
    <!-- 🎯 RouterLink Back To Main Page View -->
    <RouterLink to="/" class="btn-back">⬅️ Return to Dashboard</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.detail-container { max-width: 480px; margin: 120px auto; padding: 32px; }
h3 { margin-top: 0; color: #0f172a; font-weight: 700; text-align: center; }
.divider { border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0; }
.detail-body { text-align: left; background: #f8fafc; padding: 16px; border-radius: 10px; margin: 24px 0; border: 1px solid #e2e8f0; font-size: 14px; }
.detail-body p { margin: 10px 0; color: #334155; }
.highlight { color: var(--primary); font-weight: 600; font-family: monospace; font-size: 15px; }
.btn-back { display: block; text-decoration: none; background: #64748b; color: white; border: none; padding: 12px; border-radius: 8px; text-align: center; font-weight: 600; font-size: 14px; transition: background 0.2s; }
.btn-back:hover { background: #475569; }
</style>
