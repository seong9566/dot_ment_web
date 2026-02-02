<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="text-block">
    <h2 class="text-block__title">{{ data.title }}</h2>
    <p class="text-block__content">{{ data.content }}</p>
  </div>
</template>

<style scoped>
.text-block {
  padding: 40px 20px;
  background-color: white;
  border-radius: 12px;
  margin: 10px 0;
  border: 1px solid #eee;
}

.text-block__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111;
}

.text-block__content {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}
</style>
