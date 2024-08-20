<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue';

// Créez une référence pour contrôler l'affichage de l'écran de bienvenue
const showWelcomeScreen = ref(true);

const router = useRouter()

onMounted(() => {
  // Après 2 secondes, cachez l'écran de bienvenue et redirigez l'utilisateur vers la page d'acceuil faire en sorte que l'ecran de bienvenue ne se réaffiche pas pour cette session
  setTimeout(() => {
    sessionStorage.setItem('showWelcomeScreen', 'false');
    showWelcomeScreen.value = false;
    router.push('/');
  }, 
  11500);

});

import { onErrorCaptured} from 'vue'

const error = ref<Error | null>(null)
onErrorCaptured((err) => {
  error.value = err
  return true
})



</script>


<template>
  <p v-if="error">Erreur : {{ error.message }}</p>
  <div id="app">
  <Suspense> 
    <!-- Utilisez une condition pour afficher soit l'écran de bienvenue soit l'application principale -->
    <template v-if="showWelcomeScreen">
      <WelcomeScreen />
    </template>

    <template v-else>
      <main>
        <transition name="fade" mode="out-in">
        <RouterView />
        </transition>
      </main>
    </template>
  </Suspense>
  </div>
</template>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>