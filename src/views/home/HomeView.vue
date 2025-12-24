<template>
  <div class="home-view">
    <!-- Left Back Header -->
    <header class = "left-back-header">
        <button class = "icon-btn">
          <!-- polyline : 꼭짓점의 좌표를 나타냄 ( 나중에는 그냥 SVG 이미지 받아서 쓸 것.) -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

    </header>
    <!-- 트레이너 이름 및 아이콘 -->
    <header class="name-icon-header">
      <h1 class="header-title">Tan Trainer</h1>
      <button class="icon-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </button>
    </header>

    <!-- Nav Tabs 홈, PT 상품, 수업 일정 -->
    <nav class="nav-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-item"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </nav>

    <!-- Content 영역 (TabBarView) -->
    <div class="content"> 
      <!-- Home Tab -->
      <div v-if="activeTab === 'home'" class="tab-content">
        <!-- Hero Section -->
        <section class="hero">
          <img src="https://picsum.photos/480/700?random=1" alt="Hero Image" class="hero-image">
          <div class="hero-overlay">
            <h2 class="hero-title">
              건강한 변화를<br />
              <span class="underline-text">함께 만들어 갑니다.</span>
            </h2>
            <span class="hero-desc">7년 경력의 전문 퍼스널 트레이너 유도환 입니다.<br>체계적인 프로그램으로 여러분의 목표 달성을 함께합니다.</span>
            <button class="apply-btn">
              수업 신청하기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
          <button class="float-setting">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </section>

        <!-- Profile Section -->
        <section class="profile-info">
          <div class="info-header">
            <h3 class="info-title"><span>8년</span> 동안 쌓은 경험으로 이끄는 트레이너 ‘탄’입니다.</h3>
            <button class="icon-btn-purple">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>

          <!-- Internal Tabs -->
          <div class="internal-tabs">
            <button 
              v-for="subTab in subTabs" 
              :key="subTab.id"
              class="sub-tab-item"
              :class="{ active: activeSubTab === subTab.id }"
              @click="activeSubTab = subTab.id"
            >
              {{ subTab.label }}
            </button>
          </div>

          <div class="sub-tab-content">
            <h4 class="stat-title">{{ activeSubTab === 'career' ? '8년, 312명' : activeSubTab === 'knowhow' ? '차별화된 티칭' : '함께하는 성장' }}</h4>
            <p class="stat-desc">
              {{ activeSubTab === 'career' 
                ? '긴 시간 동안 많은 회원들을 만나며\n312번의 경력을 탄탄히 다졌습니다.' 
                : '당신만을 위한 맞춤형 루틴과\n식단 관리를 제공합니다.' 
              }}
            </p>
          </div>
        </section>

        <!-- Gallery Section -->
        <section class="gallery">
          <img src="https://picsum.photos/480/500?random=2" alt="Gallery" class="gallery-image">
        </section>
      </div>

      <!-- PT Goods Tab -->
      <div v-else-if="activeTab === 'pt'" class="tab-content empty">
        <p>PT 상품 정보를 준비 중입니다.</p>
      </div>

      <!-- Schedule Tab -->
      <div v-else-if="activeTab === 'schedule'" class="tab-content empty">
        <p>수업 일정 정보를 준비 중입니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 외부 css 스타일 파일 가져옴.
import './HomeView.css'

const tabs = [
  { id: 'home', label: '홈' },
  { id: 'pt', label: 'PT 상품' },
  { id: 'schedule', label: '수업 일정' }
]

const subTabs = [
  { id: 'career', label: '경력' },
  { id: 'knowhow', label: '노하우' },
  { id: 'vision', label: '비전' }
]

const activeTab = ref('home')
const activeSubTab = ref('career')
</script>
