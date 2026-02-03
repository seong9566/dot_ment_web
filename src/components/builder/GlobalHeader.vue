<script setup>
import { useBuilderStore } from '@/stores/useBuilderStore'
import { storeToRefs } from 'pinia'

const store = useBuilderStore()
const { siteSettings, currentPage, currentTabId } = storeToRefs(store)

const setActiveTab = (tabId) => {
  store.setActiveTab(tabId)
}
</script>

<template>
  <header class="global-header">
    <div class="global-header__top">
      <h1 class="global-header__title">{{ siteSettings.trainerName }}</h1>
      <button class="icon-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </button>
    </div>
    <nav v-if="currentPage?.tabs?.length" class="global-header__tabs">
      <button
        v-for="tab in currentPage.tabs"
        :key="tab.id"
        class="global-header__tab"
        :class="{ active: currentTabId === tab.id }"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </nav>
  </header>
</template>

<style scoped>
.global-header {
  background-color: white;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.global-header__top {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.global-header__title {
  font-size: 24px;
  font-weight: 700;
  color: #111;
}

.global-header__tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 6px 0 12px 0;
}

.global-header__tab {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #111;
  cursor: pointer;
  padding: 4px 2px;
}

.global-header__tab.active {
  color: #b3261e;
}

.icon-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #111;
}
</style>
