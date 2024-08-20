<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
   <body>
    <div class="spin circle !z-10">
        <h1>404</h1>
        <h2>PAGE NON TROUVÉE</h2>

    </div><RouterLink to="/reves" class="!z-10">
        <h4 class="errorPage__button"> Retour au portfolio</h4>
    </RouterLink>
</body>
  </template>
  
  
  <style scoped>
  @import "@/assets/css/404.css"; 
  </style>
  