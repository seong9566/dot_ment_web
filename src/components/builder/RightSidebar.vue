<script setup>
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/useBuilderStore'
import { useBuilder } from '@/composables/useBuilder'
import { getBlockConfig } from '@/components/blocks/BlockRegistry'
import { storeToRefs } from 'pinia'

const store = useBuilderStore()
const { siteSettings, selectedBlockId, blocks } = storeToRefs(store)

const { 
  updateBlockData,
  undo,
  redo
} = useBuilder()

// 현재 선택된 블록 객체 찾기
const selectedBlock = computed(() => {
  return blocks.value.find(b => b.id === selectedBlockId.value) || null
})

// 블록 속성 변경 핸들러
const handleDataUpdate = (key, value) => {
  if (selectedBlock.value) {
    updateBlockData(selectedBlockId.value, { [key]: value })
  }
}
</script>

<template>
  <aside class="right-sidebar">
    <div class="sidebar__header">
      <h2>Properties & Settings</h2>
      <div class="sidebar__history">
        <button @click="undo" title="되돌리기">↩</button>
        <button @click="redo" title="다시실행">↪</button>
      </div>
    </div>

    <!-- 사이트 설정 -->
    <div class="sidebar__section">
      <h3>사이트 설정</h3>
      <div class="sidebar__form">
        <div class="sidebar__form-group">
          <label>트레이너 이름</label>
          <input 
            :value="siteSettings.trainerName"
            @input="e => store.updateSettings({ trainerName: e.target.value })"
          />
        </div>
      </div>
    </div>

    <!-- 블록 속성 편집 -->
    <div v-if="selectedBlock" class="sidebar__section">
      <h3>속성 편집 ({{ getBlockConfig(selectedBlock.type).name }})</h3>
      <div class="sidebar__form">
        <div v-for="(value, key) in selectedBlock.data" :key="key" class="sidebar__form-group">
          <template v-if="key !== 'items' && key !== 'cards'">
            <label>{{ key }}</label>
            <textarea 
              v-if="typeof value === 'string' && value.length > 30"
              :value="value"
              @input="e => handleDataUpdate(key, e.target.value)"
              rows="3"
            ></textarea>
            <input 
              v-else-if="typeof value === 'string'"
              :value="value"
              @input="e => handleDataUpdate(key, e.target.value)"
            />
          </template>
        </div>
        <p v-if="selectedBlock.data.items || selectedBlock.data.cards" class="notice">
          * 리스트 형태의 데이터 편집은 준비 중입니다.
        </p>
      </div>
    </div>
    <div v-else class="sidebar__placeholder" style="margin-top: 20px;">
      편집할 블록을 캔버스에서 선택해 주세요.
    </div>
  </aside>
</template>

<style scoped>
.right-sidebar {
  width: 300px;
  background-color: white;
  border-left: 1px solid #e5e7eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
}

.sidebar__header {
  padding: 20px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar__header h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
}

.sidebar__history {
  display: flex;
  gap: 8px;
}

.sidebar__history button {
  background: #f3f4f6;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.sidebar__section {
  padding: 20px;
  border-bottom: 1px solid #f3f4f6;
}

.sidebar__section h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar__form-group label {
  font-size: 0.8rem;
  font-weight: 550;
  color: #374151;
  text-transform: capitalize;
}

.sidebar__form-group input, 
.sidebar__form-group textarea {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 100%;
}

.notice {
  font-size: 0.75rem;
  color: #999;
  font-style: italic;
}

.sidebar__placeholder {
  padding: 40px 20px;
  color: #9ca3af;
  text-align: center;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .right-sidebar {
    display: none;
  }
}
</style>
