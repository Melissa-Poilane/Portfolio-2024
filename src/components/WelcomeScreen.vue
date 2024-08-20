<template>
  <main class="flex justify-center items-center h-screen bg-zinc-900">
    <div :class="currentClass" class="text-5xl font-bold">
      {{ currentWord }}
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      words: ["Bonjour", "Hello", "Hallo", "Hola"],
      currentWordIndex: 0,
      currentClass: "text-pink-500",
    };
  },
  computed: {
    currentWord() {
      return this.words[this.currentWordIndex];
    },
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      setInterval(() => {
      this.currentClass = "text-black";
      setTimeout(() => {
        this.currentClass = "text-pink-500";
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }, 1000); // Change to black after 1 second
      }, 3000); // Change every 2.5 seconds
    },
  },
};
</script>

<style scoped>
.text-pink-500 {
  transition: color 1.5s;
  color: #ec4899; /* Tailwind pink-500 */
}
.text-black {
  transition: color 0.5s;
  color: #000000; /* Black */
}
</style>