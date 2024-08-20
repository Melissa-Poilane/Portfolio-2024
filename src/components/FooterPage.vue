<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps<{
  classfooter?: string;
}>()
</script>

<template>
  <footer>
   <div class="flex flex-col">
<div>
  <h5>Mélissa Poilâne</h5>
  <p>TOUT DROITS RESERVER</p>
</div>
<ul>
  <li><a href=""></a>ISTAGRAM</li>
  <li><a href=""></a>ISTAGRAM</li>
  <li><a href=""></a>ISTAGRAM</li>
  <li><a href=""></a>ISTAGRAM</li>
</ul>
<p>RETOUR EN HAUT</p>
   </div>
  </footer>
</template>
