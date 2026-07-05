<script setup lang="ts">
import TestimonialCard from '../testimonial/TestimonialCard.vue'
import { testimonials } from './testimonials.data'
</script>

<template>
  <section class="grid">
    <TestimonialCard
      v-for="item in testimonials"
      :key="item.id"
      :testimonial="item"
      :style="{ gridArea: item.area }"
    />
  </section>
</template>

<style scoped>
.grid {
    display: grid;
    width: 100%;
    max-width: 1110px;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        'daniel daniel jonathan kira'
        'jeanette patrick patrick kira';
}

@media (max-width: 1000px) {
    .grid {
        max-width: 540px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            'daniel daniel'
            'jonathan patrick'
            'jeanette patrick'
            'kira kira';
    }
}

@media (max-width: 620px) {
    .grid {
        max-width: 360px;
        grid-template-columns: 1fr;
        grid-template-areas:
            'daniel'
            'jonathan'
            'jeanette'
            'patrick'
            'kira';
    }
}
</style>
