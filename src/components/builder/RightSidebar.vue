<script setup>
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/useBuilderStore'
import { useBuilder } from '@/composables/useBuilder'
import { getBlockConfig } from '@/components/blocks/BlockRegistry'
import { storeToRefs } from 'pinia'

const store = useBuilderStore()
const { siteSettings, selectedBlockId, blocks, currentPage, currentTabId } = storeToRefs(store)

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

const toMultiline = (value) => {
  if (typeof value !== 'string') return value
  return value.replace(/<br\s*\/?\s*>/gi, '\n')
}

const toHtmlBreaks = (value) => {
  if (typeof value !== 'string') return value
  return value.replace(/\n/g, '<br>')
}

const updateListItem = (listKey, index, field, value) => {
  if (!selectedBlock.value) return
  const list = selectedBlock.value.data[listKey]
  if (!Array.isArray(list)) return
  const newList = list.map((item, itemIndex) => {
    if (itemIndex !== index) return item
    return { ...item, [field]: value }
  })
  handleDataUpdate(listKey, newList)
}

const addListItem = (listKey) => {
  if (!selectedBlock.value) return
  const list = selectedBlock.value.data[listKey]
  if (!Array.isArray(list)) return
  const newItem = listKey === 'items'
    ? { name: '상품 제목', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=new' }
    : { name: '헬스 + PT 10회', subtitle: '설명 문구를 입력하세요.', price: '₩250,000 원', buttonText: '결제하기', features: [{ text: '특징을 입력하세요', highlight: false }] }
  handleDataUpdate(listKey, [...list, newItem])
}

const removeListItem = (listKey, index) => {
  if (!selectedBlock.value) return
  const list = selectedBlock.value.data[listKey]
  if (!Array.isArray(list)) return
  const newList = list.filter((_, itemIndex) => itemIndex !== index)
  handleDataUpdate(listKey, newList)
}

const updateCardFeature = (cardIndex, featureIndex, field, value) => {
  if (!selectedBlock.value) return
  const cards = selectedBlock.value.data.cards
  if (!Array.isArray(cards)) return
  const newCards = cards.map((card, cIndex) => {
    if (cIndex !== cardIndex) return card
    const features = Array.isArray(card.features) ? card.features : []
    const newFeatures = features.map((feature, fIndex) => {
      if (fIndex !== featureIndex) return feature
      return { ...feature, [field]: value }
    })
    return { ...card, features: newFeatures }
  })
  handleDataUpdate('cards', newCards)
}

const addCardFeature = (cardIndex) => {
  if (!selectedBlock.value) return
  const cards = selectedBlock.value.data.cards
  if (!Array.isArray(cards)) return
  const newCards = cards.map((card, cIndex) => {
    if (cIndex !== cardIndex) return card
    const features = Array.isArray(card.features) ? card.features : []
    return { ...card, features: [...features, { text: '특징을 입력하세요', highlight: false }] }
  })
  handleDataUpdate('cards', newCards)
}

const removeCardFeature = (cardIndex, featureIndex) => {
  if (!selectedBlock.value) return
  const cards = selectedBlock.value.data.cards
  if (!Array.isArray(cards)) return
  const newCards = cards.map((card, cIndex) => {
    if (cIndex !== cardIndex) return card
    const features = Array.isArray(card.features) ? card.features : []
    const newFeatures = features.filter((_, fIndex) => fIndex !== featureIndex)
    return { ...card, features: newFeatures }
  })
  handleDataUpdate('cards', newCards)
}

const updateTabLabel = (tabId, value) => {
  store.updateTabLabel(tabId, value)
}

const addTab = () => {
  store.addTab('새 탭')
}

const removeTab = (tabId) => {
  store.removeTab(tabId)
}

const setActiveTab = (tabId) => {
  store.setActiveTab(tabId)
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
        <div class="sidebar__form-group">
          <label>상단 탭</label>
          <div class="sidebar__list">
            <div v-if="!currentPage?.tabs?.length" class="sidebar__placeholder">
              탭이 없습니다. 새 탭을 추가해 주세요.
            </div>
            <div v-for="(tab, index) in currentPage?.tabs || []" :key="tab.id" class="sidebar__list-item">
              <div class="sidebar__list-header">
                <span>탭 {{ index + 1 }}</span>
                <div class="sidebar__list-actions">
                  <button class="mini-btn" :class="{ active: currentTabId === tab.id }" @click="setActiveTab(tab.id)">활성</button>
                  <button class="mini-btn danger" @click="removeTab(tab.id)">삭제</button>
                </div>
              </div>
              <input
                :value="tab.label"
                @input="e => updateTabLabel(tab.id, e.target.value)"
              />
            </div>
            <button class="mini-btn" @click="addTab">+ 탭 추가</button>
          </div>
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
              :value="toMultiline(value)"
              @input="e => handleDataUpdate(key, toHtmlBreaks(e.target.value))"
              rows="3"
            ></textarea>
            <input 
              v-else-if="typeof value === 'string'"
              :value="value"
              @input="e => handleDataUpdate(key, e.target.value)"
            />
          </template>
        </div>
        <div v-if="selectedBlock.data.items" class="sidebar__list">
          <div class="sidebar__list-title">
            <h4>상품 아이템</h4>
            <button class="mini-btn" @click="addListItem('items')">+ 아이템 추가</button>
          </div>
          <div v-for="(item, index) in selectedBlock.data.items" :key="index" class="sidebar__list-item">
            <div class="sidebar__list-header">
              <span>아이템 {{ index + 1 }}</span>
              <button class="mini-btn danger" @click="removeListItem('items', index)">삭제</button>
            </div>
            <input
              :value="item.name"
              placeholder="상품명"
              @input="e => updateListItem('items', index, 'name', e.target.value)"
            />
            <input
              :value="item.description"
              placeholder="설명"
              @input="e => updateListItem('items', index, 'description', e.target.value)"
            />
            <input
              :value="item.price"
              placeholder="가격"
              @input="e => updateListItem('items', index, 'price', e.target.value)"
            />
            <input
              :value="item.imageUrl"
              placeholder="이미지 URL"
              @input="e => updateListItem('items', index, 'imageUrl', e.target.value)"
            />
          </div>
        </div>
        <div v-if="selectedBlock.data.cards" class="sidebar__list">
          <div class="sidebar__list-title">
            <h4>솔루션 카드</h4>
            <button class="mini-btn" @click="addListItem('cards')">+ 카드 추가</button>
          </div>
          <div v-for="(card, index) in selectedBlock.data.cards" :key="index" class="sidebar__list-item">
            <div class="sidebar__list-header">
              <span>카드 {{ index + 1 }}</span>
              <button class="mini-btn danger" @click="removeListItem('cards', index)">삭제</button>
            </div>
            <input
              :value="card.name"
              placeholder="카드 제목"
              @input="e => updateListItem('cards', index, 'name', e.target.value)"
            />
            <textarea
              :value="toMultiline(card.subtitle)"
              placeholder="카드 설명"
              rows="3"
              @input="e => updateListItem('cards', index, 'subtitle', toHtmlBreaks(e.target.value))"
            ></textarea>
            <input
              :value="card.price"
              placeholder="가격"
              @input="e => updateListItem('cards', index, 'price', e.target.value)"
            />
            <input
              :value="card.buttonText"
              placeholder="버튼 텍스트"
              @input="e => updateListItem('cards', index, 'buttonText', e.target.value)"
            />
            <div class="sidebar__sublist">
              <div class="sidebar__list-title">
                <h5>특징</h5>
                <button class="mini-btn" @click="addCardFeature(index)">+ 특징 추가</button>
              </div>
              <div v-for="(feature, fIndex) in card.features" :key="fIndex" class="sidebar__sublist-item">
                <input
                  :value="feature.text"
                  placeholder="특징 문구"
                  @input="e => updateCardFeature(index, fIndex, 'text', e.target.value)"
                />
                <label class="checkbox">
                  <input
                    type="checkbox"
                    :checked="feature.highlight"
                    @change="e => updateCardFeature(index, fIndex, 'highlight', e.target.checked)"
                  />
                  강조
                </label>
                <button class="mini-btn danger" @click="removeCardFeature(index, fIndex)">삭제</button>
              </div>
            </div>
          </div>
        </div>
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

.sidebar__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar__list-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar__list-title h4,
.sidebar__list-title h5 {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #111;
}

.sidebar__list-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar__list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #374151;
  font-weight: 600;
}

.sidebar__list-actions {
  display: flex;
  gap: 6px;
}

.sidebar__sublist {
  border-top: 1px dashed #e5e7eb;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar__sublist-item {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px;
  align-items: center;
}

.mini-btn {
  background: #f3f4f6;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #111;
  cursor: pointer;
}

.mini-btn.active {
  background: #111827;
  color: #fff;
}

.mini-btn.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #374151;
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
