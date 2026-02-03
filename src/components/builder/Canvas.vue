<script setup>
import { ref } from 'vue'
import { useBuilder } from '@/composables/useBuilder'
import { getBlockConfig } from '@/components/blocks/BlockRegistry'
import { useBuilderStore } from '@/stores/useBuilderStore'
import GlobalHeader from './GlobalHeader.vue'

const store = useBuilderStore()
const { blocks, selectedBlockId, removeBlock, reorderBlocks } = useBuilder()

const dragIndex = ref(null)

const selectBlock = (id) => {
  selectedBlockId.value = id
}

// Drag & Drop handlers
const onDragStart = (index) => {
  dragIndex.value = index
}

const onDragOver = (e) => {
  e.preventDefault()
}

const onDrop = (index) => {
  if (dragIndex.value !== null && dragIndex.value !== index) {
    reorderBlocks(store.currentPageId, store.currentTabId, dragIndex.value, index)
  }
  dragIndex.value = null
}
</script>

<template>
  <div class="canvas-container">
    <div class="mobile-frame">
      <div class="mobile-frame__notch"></div>
      <div class="mobile-frame__content">
        <!-- 전역 헤더 -->
        <GlobalHeader />

        <div v-if="blocks.length === 0" class="canvas__empty">
          <p>사이드바에서 블록을 추가하여<br>페이지를 디자인해 보세요.</p>
        </div>
        
        <div 
          v-for="(block, index) in blocks" 
          :key="block.id"
          class="canvas__item-wrapper"
          :class="{ 
            'is-selected': selectedBlockId === block.id,
            'is-dragging': dragIndex === index 
          }"
          @click="selectBlock(block.id)"
          @dragover="onDragOver"
          @drop="onDrop(index)"
        >
          <!-- 드래그 핸들 및 컨트롤 -->
          <div v-if="selectedBlockId === block.id" class="canvas__controls">
            <div 
              class="drag-handle" 
              draggable="true" 
              @dragstart="onDragStart(index)"
            >
              ≡
            </div>
            <button @click.stop="removeBlock(block.id)" class="btn-delete">삭제</button>
          </div>

          <!-- 실제 블록 렌더링 -->
          <component 
            :is="getBlockConfig(block.type).component" 
            :data="block.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.canvas-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: auto;
  background-color: #f1f3f5;
}

.mobile-frame {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0;
  border: none;
  box-shadow: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mobile-frame__notch {
  display: none;
}

.mobile-frame__content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  padding-right: 72px;
}

.mobile-frame__content::-webkit-scrollbar {
  display: none;
}

.canvas__empty {
  height: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 0.95rem;
  line-height: 1.5;
}

.canvas__item-wrapper {
  position: relative;
  transition: opacity 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;
  padding-right: 60px;
}

.canvas__item-wrapper.is-dragging {
  opacity: 0.4;
}

.canvas__item-wrapper.is-selected {
  border: 2px solid #4f46e5;
  z-index: 10;
}

.canvas__controls {
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 20;
}

.drag-handle {
  background-color: #4f46e5;
  color: white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: grab;
  font-size: 20px;
}

.drag-handle:active {
  cursor: grabbing;
}

.btn-delete {
  background-color: #ef4444;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

/* Response for actual mobile view env */
@media (max-width: 768px) {
  .canvas-container {
    background-color: white;
  }
  .mobile-frame {
    height: 100vh;
  }
  .canvas__controls {
    right: 10px;
    top: 10px;
  }
}
</style>
