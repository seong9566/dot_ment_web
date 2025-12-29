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
            <!-- 경력 탭 컨텐츠 -->
            <div v-if="activeSubTab === 'career'" class="career-content">
              <p class="stat-title">8년, 312명</p>
              <p class="stat-desc">
                긴 시간 동안 많은 회원들을 만나며<br>
                312번의 경력을 탄탄히 다졌습니다.
              </p>
              <div class="sub-tab-image-container career">
                <img src="https://picsum.photos/480/500?random=2" alt="Career" class="sub-tab-image">
              </div>
            </div> 

            <!-- 노하우 탭 컨텐츠 -->
            <div v-else-if="activeSubTab === 'knowhow'" class="knowhow-content">
              <div class="sub-tab-row">  
                <div class="sub-tab-image-container side">
                  <img src="https://picsum.photos/300/400?random=3" alt="Knowhow" class="sub-tab-image rounded">
                </div>
                <p class="stat-desc align-left">
                  근육은 풍선이 아닙니다.<br>
                  안정적이고, 점진적인<br>
                  근육량 증가를<br>
                  위해서는 내제적인<br>
                  건강이 우선입니다.
                </p>
              </div>
            </div>

            <!-- 비전 탭 컨텐츠 -->
            <div v-else-if="activeSubTab === 'vision'" class="vision-content">
              <div class="sub-tab-image-container full">
                <img src="https://picsum.photos/480/300?random=4" alt="Vision" class="sub-tab-image">
              </div>
              <p class="stat-desc align-left">
                회원님에게 알맞는 프로그램 설계를 시작으로,<br>
                회원님의 성장에 따라 프로그램도 재설계 되며<br>
                회원님의 목적지까지 늘 새로운 경험을 약속합니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- PT Goods Tab -->
      <div v-else-if="activeTab === 'pt'" class="tab-content pt-goods-tab">
        <!-- PT Section -->
        <section class="goods-section">
          <div class="section-header">
            <h2 class="section-title">PT</h2>
            <button class="view-all-btn">
              전체 보기
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
          <div class="goods-list">
            <div v-for="i in 3" :key="'pt-'+i" class="goods-item">
              <div class="goods-image-container">
                <img :src="`https://picsum.photos/436/464?random=pt${i}`" alt="PT Goods" class="goods-image">
              </div>
              <div class="goods-info">
                <h4 class="goods-name">PT {{ i * 10 }}회</h4>
                <p class="goods-desc">상품 상세 설명</p>
                <p class="goods-price">가격</p>
              </div>
            </div>
          </div>
        </section>

        <!-- GYM Section -->
        <section class="goods-section">
          <div class="section-header">
            <h2 class="section-title">GYM</h2>
            <button class="view-all-btn">
              전체 보기
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
          <div class="goods-list">
            <div v-for="i in 3" :key="'gym-'+i" class="goods-item">
              <div class="goods-image-container">
                <img :src="`https://picsum.photos/436/464?random=gym${i}`" alt="GYM Goods" class="goods-image">
              </div> 
              <div class="goods-info">
                <h4 class="goods-name">상품 제목</h4>
                <p class="goods-desc">상품 상세 설명</p>
                <p class="goods-price">가격</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Schedule Tab -->
      <div v-else-if="activeTab === 'schedule'" class="tab-content schedule-tab">
        <div class="section-header">
          <h2 class="section-title">회원님께 맞는 솔루션 선택하기</h2>
          <button class="view-all-btn">
            더보기
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        <div class="solution-list">
          <div v-for="i in 2" :key="'solution-'+i" class="solution-card">
            <div class="card-header">
              <h3 class="solution-name">헬스 + PT 10회</h3>
              <p class="solution-subtitle">PT만 하면 뭐해~<br>헬스장에서 개인 운동까지!</p>
            </div>
            
            <ul class="feature-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                전체 수입 운동기구 구비 완료
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                샤워장 구비 완료
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                할 말이 없네
              </li>
              <li class="highlight">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                맞춤형 식사 습관 연습
              </li>
              <li class="highlight">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                처음 운동하는 사람도 기초를 다질 수 있는 기본 솔루션!
              </li>
            </ul>

            <div class="divider"></div>

            <div class="card-footer">
              <p class="solution-price">₩250,000 원</p>
              <div class="button-group">
                <button class="btn-primary">결제하기</button>
                <button class="btn-text">
                  더 알아보기
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
