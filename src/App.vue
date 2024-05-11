<script setup lang="ts">
import Footer from './components/layouts/Footer/index.vue'
import Navbar from './components/layouts/Navbar/index.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
