<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="hero-block">
    <div class="hero-block__content">
      <h1 class="hero-block__title">{{ data.title }}</h1>
      <p class="hero-block__subtitle">{{ data.subtitle }}</p>
      <button v-if="data.buttonText" class="hero-block__button">
        {{ data.buttonText }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-block {
  padding: 80px 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: white;
  text-align: center;
  border-radius: 12px;
  margin: 10px 0;
}

.hero-block__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.hero-block__subtitle {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-block__button {
  background-color: #4f46e5;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hero-block__button:hover {
  background-color: #4338ca;
}
</style>
