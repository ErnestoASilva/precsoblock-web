<template>
  <div id="app">
    <NMessageProvider>
      <Header />
      <main class="pt-16 min-h-screen">
        <router-view />
      </main>
      <Footer />
      <FloatingButtons />
    </NMessageProvider>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NMessageProvider } from 'naive-ui';

//Component
import Header from './components/global/Header.vue';
import Footer from './components/global/Footer.vue';
import FloatingButtons from './components/global/FloatingButtons.vue';

</script>


<style scoped></style>
