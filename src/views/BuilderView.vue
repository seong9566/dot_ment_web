<script setup>
import LeftSidebar from '@/components/builder/LeftSidebar.vue'
import RightSidebar from '@/components/builder/RightSidebar.vue'
import Canvas from '@/components/builder/Canvas.vue'
</script>

<template>
  <div class="builder-view">
    <LeftSidebar />
    <main class="builder-main">
      <Canvas />
    </main>
    <RightSidebar />
  </div>
</template>

<style scoped>
.builder-view {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f1f3f5;
}

.builder-main {
  flex: 1;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .builder-main {
    width: 100%;
  }
}
</style>
