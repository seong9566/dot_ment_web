<script setup>
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/useBuilderStore'
import { getAvailableBlocks, getBlockConfig } from '@/components/blocks/BlockRegistry'
import { useBuilder } from '@/composables/useBuilder'
import { storeToRefs } from 'pinia'

const store = useBuilderStore()
const { siteStructure, currentTabId, currentPageId } = storeToRefs(store)
const { addBlock } = useBuilder()

const availableBlocks = getAvailableBlocks()

const handleAddPage = () => {
  const newPageName = prompt('페이지 이름을 입력하세요:')
  if (newPageName) {
    const newPageId = store.addPage(currentTabId.value, newPageName)
    currentPageId.value = newPageId
  }
}
</script>

<template>
  <aside class="left-sidebar">
    <div class="sidebar__header">
      <h2>Blocks & Pages</h2>
    </div>

    <!-- 사이 업 설정은 우측으로 이동 -->
    
    <!-- 사이트 구조 관리 -->
    <div class="sidebar__section">
      <h3>사이트 구조</h3>
      <div class="sidebar__tabs-nav">
        <button 
          v-for="tab in siteStructure" 
          :key="tab.id"
          class="nav-btn"
          :class="{ active: currentTabId === tab.id }"
          @click="currentTabId = tab.id; currentPageId = tab.pages[0]?.id"
        >
          {{ tab.label }}
        </button>
      </div>
      
      <div class="sidebar__pages-list">
        <div 
          v-for="page in store.currentTab?.pages" 
          :key="page.id"
          class="page-item"
          :class="{ active: currentPageId === page.id }"
          @click="currentPageId = page.id"
        >
          📄 {{ page.name }}
        </div>
        <button class="add-page-btn" @click="handleAddPage">+ 페이지 추가</button>
      </div>
    </div>

    <!-- 블록 추가 리스트 -->
    <div class="sidebar__section">
      <h3>블록 추가</h3>
      <div class="sidebar__block-grid">
        <div 
          v-for="block in availableBlocks" 
          :key="block.type"
          class="sidebar__block-item"
          @click="addBlock(block.type, getBlockConfig(block.type).defaultData)"
        >
          {{ block.name }}
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.left-sidebar {
  width: 280px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
}

.sidebar__header {
  padding: 20px;
  border-bottom: 1px solid #f3f4f6;
}

.sidebar__header h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
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

.sidebar__tabs-nav {
  display: flex;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 12px;
}

.nav-btn {
  flex: 1;
  border: none;
  background: transparent;
  padding: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #666;
  border-radius: 6px;
  cursor: pointer;
}

.nav-btn.active {
  background: white;
  color: #111;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.sidebar__pages-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.page-item {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  color: #444;
}

.page-item:hover {
  background: #f9fafb;
}

.page-item.active {
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 600;
}

.add-page-btn {
  width: 100%;
  margin-top: 8px;
  background: transparent;
  border: 1px dashed #d1d5db;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #666;
  cursor: pointer;
}

.sidebar__block-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.sidebar__block-item {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar__block-item:hover {
  border-color: #4f46e5;
  background-color: #eef2ff;
}

@media (max-width: 768px) {
  .left-sidebar {
    display: none;
  }
}
</style>
