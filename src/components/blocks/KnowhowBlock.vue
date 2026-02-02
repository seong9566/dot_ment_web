<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="knowhow-block">
    <div class="knowhow-block__row">
      <div class="knowhow-block__image-container">
        <img :src="data.imageUrl || 'https://picsum.photos/300/400?random=3'" alt="Knowhow" class="knowhow-block__image">
      </div>
      <p class="knowhow-block__desc" v-html="data.description"></p>
    </div>
  </div>
</template>

<style scoped>
.knowhow-block {
  padding: 20px;
  background: white;
}

.knowhow-block__row {
  display: flex;
  gap: 20px;
  align-items: center;
}

.knowhow-block__image-container {
  flex: 0 0 40%;
  width: 40%;
}

.knowhow-block__image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.knowhow-block__desc {
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  color: black;
  text-align: left;
  line-height: 1.5;
}
</style>
