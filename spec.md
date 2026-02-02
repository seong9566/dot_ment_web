# 프로젝트 사양서 (Specification: Dot Ment Web Builder)

## 1. 프로젝트 개요
- **프로젝트 명**: Dot Ment (Web Builder)
- **설명**: 사용자가 코딩 없이 드래그 앤 드롭 및 설정을 통해 자신만의 웹페이지를 만들 수 있는 "웹 빌더" 서비스 (아임웹 방식).
- **주요 기능**: 블록 기반 편집, 실시간 프레임워크, 반응형 레이아웃 자동 생성.

---

## 2. 기술 스택
- **Framework**: Vue 3 (Composition API)
- **State Management**: Pinia (빌더 상태 및 블록 데이터 관리)
- **Styling**: Vanilla CSS (CSS 변수 기반 테마 시스템)
- **Editor Logic**: JSON 기반 블록 구조 데이터 처리

---

## 3. 핵심 아키텍처 (Web Builder)

### 3.1 블록 시스템 (Block System)
- 모든 콘텐츠는 '블록' 단위로 관리됩니다.
- **블록 레지스트리**: 새로운 블록 타입을 쉽게 추가할 수 있도록 중앙 집중식 레지스트리 시스템을 사용합니다.
- **데이터 유효성**: JSON 스키마 검증을 통해 부적절한 데이터 주입을 차단합니다.

### 3.2 빌더 엔진 (Builder Engine)
- **Canvas**: 사용자가 블록을 배치하고 결과를 실시간으로 확인하는 영역. 드래그 앤 드롭(Draggable) 라이브러리를 활용합니다.
- **Sidebar**: 블록 라이브러리 선택 및 상세 속성 편집.
- **History 관리**: Command 패턴을 도입하여 Undo(되돌리기) / Redo(다시실행) 기능을 지원합니다.
- **Renderer**: JSON 데이터를 기반으로 Vue의 `component :is`를 활용하여 동적 렌더링을 수행합니다.

### 3.3 반응형 디자인 (Responsive)
- 데스크탑에서 편집하더라도 모바일/태블릿에 최적화된 결과물을 자동으로 생성.
- 모바일 우선(Mobile-first) 디자인 철학을 유지하되 데스크탑 경험 보장.

---

## 4. 폴더 구조
```text
src/
├── components/
│   ├── builder/        # 빌더 전용 UI (Canvas, Sidebar, Toolbar)
│   └── blocks/         # 실제 렌더링될 개별 블록 컴포넌트
├── composables/
│   └── useBuilder.js   # 블록 추가, 삭제, 이동, 속성 변경 로직
├── stores/
│   └── useBuilderStore.js # 빌더 현재 상태 (JSON 데이터) 저장
└── views/
    ├── BuilderView.vue # 편집 모드 화면
    └── PreviewView.vue # 실제 결과물 미리보기 화면
```
