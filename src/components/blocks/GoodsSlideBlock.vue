<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="goods-slide">
    <div class="goods-slide__header">
      <h2 class="goods-slide__title">{{ data.title }}</h2>
      <button v-if="data.showViewAll" class="goods-slide__view-all">
        전체 보기
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>
    <div class="goods-slide__list">
      <div v-for="(item, index) in data.items" :key="index" class="goods-slide__item">
        <div class="goods-slide__image-container">
          <img :src="item.imageUrl" alt="Goods" class="goods-slide__image">
        </div>
        <div class="goods-slide__info">
          <h4 class="goods-slide__name">{{ item.name }}</h4>
          <p class="goods-slide__desc">{{ item.description }}</p>
          <p class="goods-slide__price">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.goods-slide {
  margin-bottom: 24px;
  overflow: hidden;
}

.goods-slide__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
}

.goods-slide__title {
  font-size: 24px;
  font-weight: 600;
  color: black;
}

.goods-slide__view-all {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.goods-slide__list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 20px;
  scrollbar-width: none;
}

.goods-slide__list::-webkit-scrollbar {
  display: none;
}

.goods-slide__item {
  flex: 0 0 218px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.goods-slide__item:hover {
  transform: scale(1.02);
}

.goods-slide__image-container {
  width: 218px;
  height: 232px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 12px;
}

.goods-slide__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.goods-slide__name {
  font-size: 20px;
  font-weight: 600;
  color: #111;
  margin-bottom: 4px;
}

.goods-slide__desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.goods-slide__price {
  font-size: 16px;
  font-weight: 500;
  color: #111;
}
</style>
