# 프로젝트 사양서 (Specification: Dot Ment Web)

## 1. 프로젝트 개요
- **프로젝트 명**: Dot Ment (Trainer Web)
- **설명**: 트레이너와 회원을 연결하고 수업 스케줄을 효율적으로 관리하기 위한 웹 어플리케이션.
- **주요 사용자**: 개인 헬스 트레이너 (단일 역할)
- **배포 형태**: 모바일 웹 (Flutter WebView 하이브리드 인터페이스 기반)

---

## 2. 기술 스택
- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **State Management**: Pinia (전역 상태 관리)
- **Networking**: Axios (HTTP 클라이언트, Flutter의 Dio 역할)
- **Router**: Vue Router (페이지 네비게이션)
- **Styling**: Vanilla CSS (커스텀 디자인 시스템 구축)
- **Container**: Flutter WebView (iOS/Android)

---

## 3. 기능 요구사항 (MVP)

### 3.1 회원 관리
- 회원 리스트 조회 및 검색 (이름, 상태별 필터링)
- 회원 상세 정보 조회 (기본 프로필, 특이사항, 잔여 세션)
- 새로운 회원 등록 기능

### 3.2 수업 및 스케질 관리
- 캘린더 기반 수업 일정 관리 (일간/주간/월간 뷰)
- PT 수업 예약, 변경 및 취소
- 수업 완료 처리 및 세션 자동 차감 로직

### 3.3 미디어 관리
- 회원의 운동 자세 교정용 사진/동영상 업로드 및 조회
- 썸네일 미리보기 지원

### 3.4 알림 및 설정
- 수업 일정 관련 푸시 알림 (Flutter Bridge 연동 예정)
- 트레이너 개인 설정 및 로그아웃

### 3.5 UI Layout 제약 사항
- **Mobile-only Viewport**: 데스크탑 웹 브라우저에서도 모바일 가로 너비(최대 480px 등)로 고정되어 표시됩니다.
- **Centering**: 화면 중앙에 앱 본체가 위치하며, 좌우 남는 공간은 배경색 또는 빈 공간으로 처리합니다.
- **Bottom Navigation**: 하이브리드 앱 특성에 맞춰 모바일 하단 탭 바 스타일을 기본으로 합니다.

---

## 4. 아키텍처 설계 (Standard Vue Layered Architecture)

Vue 실무에서 가장 안정적이고 확장성 있는 **계층형 구조(Layered Architecture)**를 채택합니다. 이는 Flutter의 Clean Architecture 개념을 웹에 맞게 최적화한 형태입니다.

### 폴더 구조
```text
src/
├── api/            # [Data Layer] Axios 인스턴스, API 정의 (Flutter의 Repository/DataSource)
├── assets/         # [Assets] 이미지, 아이콘, 전역 CSS 변수
├── components/     # [UI Layer] 공통/원자 단위 컴포넌트 (Button, Input, Card 등)
├── composables/    # [Logic Layer] ViewModel 역할 (비즈니스 로직, 상태 로직 재사용)
├── layouts/        # [UI Layout] 페이지 틀 (MainLayout, AuthLayout 등)
├── router/         # [Navigation] 페이지 경로 정의
├── stores/         # [State Layer] Pinia 스토어 (전역 상태, Flutter의 Provider/Notifier)
├── utils/          # [Utility] 날짜 포맷팅, 유효성 검사 등 유틸리티 함수
└── views/          # [View Layer] 페이지 단위 컴포넌트 (HomeView, MemberListView 등)
```

---

## 5. 단계별 개발 계획
1. **Phase 1 (Setup)**: 프로젝트 기반 구조 및 Axios, Pinia 초기 환경 설정
2. **Phase 2 (Common UI)**: 공통 디자인 가이드에 따른 베이스 위젯 개발
3. **Phase 3 (Features)**: 회원 리스트, 상세, 캘린더 기능 순차 구현
4. **Phase 4 (Bridge)**: Flutter WebView와의 메시지 통신(Hybrid Bridge) 구현
5. **Phase 5 (Polish)**: 애니메이션 및 성능 최적화
