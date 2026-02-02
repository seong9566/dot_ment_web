<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="career-block">
    <h3 class="career-block__title">{{ data.title }}</h3>
    <p class="career-block__desc" v-html="data.description"></p>
    <div class="career-block__image-container">
      <img :src="data.imageUrl || 'https://picsum.photos/480/500?random=2'" alt="Career" class="career-block__image">
    </div>
  </div>
</template>

<style scoped>
.career-block {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
}

.career-block__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.career-block__desc {
  font-size: 12px;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
  line-height: 1.5;
}

.career-block__image-container {
  width: 100%;
  margin: 0 -20px;
  width: calc(100% + 40px);
}

.career-block__image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
