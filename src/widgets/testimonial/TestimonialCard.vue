<script setup lang="ts">
import type { Testimonial } from '../testimonials/testimonials.data'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
  <article :class="['card', `card--${testimonial.theme}`]">
    <header class="card__author">
      <img class="card__avatar" :src="testimonial.avatar" :alt="testimonial.name" />
      <div class="card__meta">
        <p class="card__name">{{ testimonial.name }}</p>
        <p class="card__role">{{ testimonial.role }}</p>
      </div>
    </header>

    <h2 class="card__headline">{{ testimonial.headline }}</h2>

    <p class="card__quote">{{ testimonial.quote }}</p>
  </article>
</template>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.6rem 2rem 2rem;
    border-radius: 8px;
    background-color: var(--White);
    box-shadow: 40px 60px 50px -47px rgba(72, 85, 106, 0.25);
    overflow: hidden;
    z-index: 0;
}

.card__author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.1rem;
    z-index: 1;
}

.card__avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid transparent;
}

.card__name {
    margin: 0;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.2;
}

.card__role {
    margin: 0.1rem 0 0;
    font-size: 0.6875rem;
    font-weight: 500;
    opacity: 0.5;
}

.card__headline {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    z-index: 1;
}

.card__quote {
    margin: 0;
    font-size: 0.86rem;
    font-weight: 500;
    line-height: 1.4;
    opacity: 0.7;
    z-index: 1;
}

/* --- Purple (Daniel) --- */
.card--purple {
    background-color: var(--Purple500);
    color: var(--White);
}

.card--purple .card__avatar {
    border-color: var(--Purple300);
}

.card--purple.card {
    /* фоновый паттерн кавычек */
    background-image: url('/images/bg-pattern-quotation.svg');
    background-repeat: no-repeat;
    background-position: top right 15%;
}

/* --- Grey (Jonathan) --- */
.card--grey {
    background-color: var(--Grey500);
    color: var(--White);
}

/* --- Dark blue (Patrick) --- */
.card--dark {
    background-color: var(--DarkBlue);
    color: var(--White);
}

.card--dark .card__avatar {
    border-color: var(--Purple500);
}

/* --- White (Jeanette, Kira) --- */
.card--white {
    color: var(--Grey500);
}
</style>
