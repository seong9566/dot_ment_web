# Project Hand-off: Dot Ment Web Builder

본 문서는 현재까지 진행된 **Dot Ment (Web Builder)** 프로젝트의 작업 현황을 요약하고, 다음 작업자들이 흐름을 놓치지 않고 이어갈 수 있도록 가이드를 제공합니다.

## 1. 프로젝트 개요
- **목적**: 트레이너가 자신만의 웹페이지를 만들 수 있는 "웹 빌더" 플랫폼 개발.
- **핵심 아키텍처**: JSON 형태의 페이지 데이터 모델을 기반으로 동적 블록 렌더링 시스템 구축.
- **기술 스택**: Vue 3 (Composition API), Pinia, Vanilla CSS.

## 2. 현재까지 완료된 작업

### 🏗️ 코어 엔진 (Phase 1)
- **중앙 상태 관리 (`useBuilderStore.js`)**: 블록, 페이지, 탭, 사이트 설정을 아우르는 데이터 구조 설계 및 구현. Undo/Redo 기능 탑재.
- **로직 분리 (`useBuilder.js`)**: 블록 추가/삭제/수정/순서변경 등의 비즈니스 로직을 Composable로 추상화.
- **블록 레지스트리 (`BlockRegistry.js`)**: 새로운 블록을 쉽게 등록하고 동적으로 로드할 수 있는 시스템 구축.

### 🎨 빌더 인터페이스 (UI)
- **Dual Sidebar Layout**: 
    - **좌측 (LeftSidebar)**: 블록 라이브러리 및 탭/페이지 관리.
    - **우측 (RightSidebar)**: 선택된 블록의 속성 편집 및 사이트 설정(트레이너 이름 등).
- **중앙 캔버스 (Canvas)**: 
    - 모바일 사이즈(iPhone 15 Pro Max 규격) 프레임 적용.
    - **핸들 기반 드래그 앤 드롭**: 블록 우측의 `≡` 핸들을 사용하여 직관적으로 순서 변경 가능.
- **반응형 대응**: 모바일 뷰포트 접속 시 사이드바 자동 숨김 처리.

### 🧩 구현된 블록들
- `HomeHeroBlock`: 이미지 배경과 타이틀, 설명 버튼이 포함된 상단 섹션.
- `CareerBlock`, `KnowhowBlock`, `VisionBlock`: 트레이너 프로필 섹션을 구성하는 개별 블록.
- `GoodsSlideBlock`: 상품 가로 슬라이더(JSON 리스트 연동).
- `SolutionCardBlock`: 포인트 강조형 솔루션 카드 리스트.
- `TextBlock`, `HeroBlock`: 기본적인 텍스트 기반 블록.

### 🔄 HomeView 리팩토링
- 기존의 하드코딩된 `HomeView` 내용을 모두 블록 데이터로 추출하여 빌더의 초기값으로 주입 완료.

## 3. 다음 작업 내용 (TODO)

### 🚀 기능 고도화
- [ ] **리스트 데이터 편집기**: `GoodsSlideBlock`이나 `SolutionCardBlock`의 내부 아이템들을 추가/삭제/수정할 수 있는 상세 편집 UI (RightSidebar 연동).
- [ ] **데이터 저장 및 영속성**: 빌더의 상태(JSON)를 Local Storage 또는 백엔드 API와 연동하여 유지.
- [ ] **미디어 관리**: 이미지 업로드 기능 및 빌더 내 이미지 갤러리 연동.

### 💄 UI/UX 개선
- [ ] **애니메이션**: 블록 이동 또는 추가 시 부드러운 트랜지션 효과 적용.
- [ ] **미리보기 모드**: 빌더 UI를 제외하고 실제 웹사이트로 어떻게 보이는지 확인할 수 있는 Full Preview 기능.

### 📂 블록 및 템플릿 추가
- [ ] **추가 블록 개발**: 푸터(Footer), 커스터머 리뷰(Reviews), 문의하기(Contact Form) 등.
- [ ] **전역 스타일 설정**: 사이트 폰트, 주요 컬러(Theme Color) 등을 한 번에 변경할 수 있는 기능.

## 4. 참고 사항
- 모든 작업 계획 및 상세 설명은 `brain/` 디렉토리 내의 `implementation_plan.md`, `walkthrough.md`, `task.md`에 상세히 기록되어 있습니다.
- 코딩 규칙은 `.cursorrules`와 `.agent/rules/vue-rule.md`를 엄격히 준수하십시오.
