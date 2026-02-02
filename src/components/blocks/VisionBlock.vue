<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="vision-block">
    <div class="vision-block__image-container">
      <img :src="data.imageUrl || 'https://picsum.photos/480/300?random=4'" alt="Vision" class="vision-block__image">
    </div>
    <p class="vision-block__desc" v-html="data.description"></p>
  </div>
</template>

<style scoped>
.vision-block {
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
}

.vision-block__image-container {
  margin: 0 -20px 12px -20px;
  width: calc(100% + 40px);
}

.vision-block__image {
  width: 100%;
  height: auto;
  display: block;
}

.vision-block__desc {
  font-size: 16px;
  font-weight: 400;
  color: black;
  text-align: left;
  line-height: 1.5;
}
</style>
