<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="solution-cards">
    <div class="solution-cards__header">
      <h2 class="solution-cards__title">{{ data.title }}</h2>
      <button v-if="data.showMore" class="solution-cards__more">
        더보기
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>

    <div class="solution-cards__list">
      <div v-for="(card, index) in data.cards" :key="index" class="solution-card">
        <div class="solution-card__header">
          <h3 class="solution-card__name">{{ card.name }}</h3>
          <p class="solution-card__subtitle" v-html="card.subtitle"></p>
        </div>
        
        <ul class="solution-card__features">
          <li v-for="(feature, fIndex) in card.features" :key="fIndex" :class="{ 'is-highlight': feature.highlight }">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            {{ feature.text }}
          </li>
        </ul>

        <div class="solution-card__divider"></div>

        <div class="solution-card__footer">
          <p class="solution-card__price">{{ card.price }}</p>
          <div class="solution-card__buttons">
            <button class="btn-primary">{{ card.buttonText || '결제하기' }}</button>
            <button class="btn-text">더 알아보기</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-cards {
  padding: 0 0 24px 0;
}

.solution-cards__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
}

.solution-cards__title {
  font-size: 24px;
  font-weight: 600;
  color: black;
}

.solution-cards__more {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.solution-cards__list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  scrollbar-width: none;
}

.solution-cards__list::-webkit-scrollbar {
  display: none;
}

.solution-card {
  flex: 0 0 320px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.solution-card__header {
  margin-bottom: 12px;
}

.solution-card__name {
  font-size: 18px;
  font-weight: 600;
  color: #B11226;
  margin-bottom: 8px;
}

.solution-card__subtitle {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
  line-height: 1.4;
}

.solution-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  flex: 1;
}

.solution-card__features li {
  font-size: 13px;
  font-weight: 500;
  color: #666666;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}

.solution-card__features li.is-highlight {
  color: #B11226;
}

.solution-card__divider {
  height: 1px;
  background-color: #E0E0E0;
  margin-bottom: 24px;
}

.solution-card__price {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
}

.solution-card__buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.btn-primary {
  width: 100%;
  height: 48px;
  background-color: #B11226;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
}

.btn-text {
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>
