<script setup lang="ts">
import Testimonials from '../../widgets/testimonials/Testimonials.vue'
import Footer from '../../shared/ui/Footer/Footer.vue'
</script>

<template>
  <section class="page">
    <Testimonials />
    <Footer />
  </section>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
