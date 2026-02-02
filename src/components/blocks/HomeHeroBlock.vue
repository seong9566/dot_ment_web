<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__image-container">
      <img :src="data.imageUrl || 'https://picsum.photos/480/700?random=1'" alt="Hero Image" class="home-hero__image">
      <div class="home-hero__overlay">
        <h2 class="home-hero__title" v-html="data.title"></h2>
        <p class="home-hero__desc" v-html="data.description"></p>
        <button v-if="data.buttonText" class="home-hero__apply-btn">
          {{ data.buttonText }}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  width: 100%;
  margin-bottom: 32px;
}

.home-hero__image-container {
  position: relative;
  width: 100%;
}

.home-hero__image {
  width: 100%;
  height: auto;
  display: block;
}

.home-hero__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 20px;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-hero__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 4px;
}

.home-hero__desc {
  display: block;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.5;
  color: white;
  margin-bottom: 40px;
}

.home-hero__apply-btn {
  align-items: center;
  background-color: #b3261e;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 900;
  display: inline-flex;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.home-hero__apply-btn:hover {
  background-color: #9b1e17;
}
</style>
