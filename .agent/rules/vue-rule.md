---
trigger: always_on
---

# Dot Ment Project Rules

이 파일은 Dot Ment(Trainer Web) 프로젝트의 코딩 표준 및 협업 규칙을 정의합니다. 모든 AI 상호작용 및 코드 생성 시 이 규칙을 엄격히 준수하십시오.

## 1. 언어 및 커뮤니케이션
- **주 언어**: 모든 설명, 주석, 답변 및 **계획서(Artifacts)**는 **한국어**로 작성합니다.
- **구현 전 로직 설명**: 코드를 작성하거나 수정하기 전에 반드시 구현 방향과 로직을 먼저 한국어로 설명하고 사용자의 확인을 받습니다.

## 2. 기술 스택 및 아키텍처
- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **State Management**: Pinia
- **Styling**: Vanilla CSS (Scoped 스타일 권장)
- **Architecture**: Layered Architecture (Data-Logic-UI 분리)
    - `api/`: API 정의 및 요청 로직
    - `composables/`: 비즈니스 로직 및 상태 관리 로직 (View와 로직 엄격히 분리)
    - `components/`: UI 전용 컴포넌트
    - `views/`: 페이지 단위 컴포넌트
    - `stores/`: Pinia 스토어

## 3. 명명 규칙 (Naming Conventions)
- **컴포넌트**: `PascalCase` (예: `MemberCard.vue`, `ScheduleCalendar.vue`)
- **파일/폴더/변수/함수**: `camelCase` (예: `useAuth.js`, `getUserInfo()`)
- **Pinia 스토어**: `use{Name}Store` 형식 (예: `useUserStore.js`)
- **CSS 클래스**: `kebab-case` 또는 BEM 방식 (`block__element--modifier`)

## 4. 코딩 스타일 및 제약 사항
- **Logic Separation**: UI 컴포넌트(`views`, `components`) 내부에는 가급적 최소한의 UI 제어 로직만 담고, 복잡한 비즈니스 로직은 반드시 `composables`로 분리하여 작성합니다.
- **Responsive Web Design**: 특정 뷰포트에 국한되지 않고, 모바일과 데스크탑 모두에서 최적의 경험을 제공하는 **반응형 웹**으로 구현합니다.
- **Modern Web Patterns**: Flutter의 하이브리드 인터페이스에 얽매이지 않고, 최신 웹 트렌드와 사용자 경험(UX) 패턴을 따릅니다.
- **Testing**: 새로운 기능 구현 시 반드시 관련 테스트 코드를 작성합니다.

## 5. 스타일링 가이드 (For Mobile Devs)
- **Scoped Style**: Vue 컴포넌트 내`<style scoped>`를 사용하여 스타일 오염을 방지합니다.
- **BEM-lite**: 클래스 명명 시 계층 구조를 명확히 하여(예: `.list__item`) 스타일의 용도를 쉽게 파악할 수 있도록 합니다.
- **CSS Variables**: `src/assets/styles/variables.css` (예정) 에 정의된 변수를 적극 활용하여 일관된 테마를 유지합니다.
