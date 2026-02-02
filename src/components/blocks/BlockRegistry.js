import { defineAsyncComponent } from 'vue'

/**
 * 블록 컴포넌트들을 등록하고 관리하는 레지스트리
 */
export const blockRegistry = {
    HeroBlock: {
        name: '기본 히어로',
        component: defineAsyncComponent(() => import('./HeroBlock.vue')),
        defaultData: {
            title: '새로운 시작, 새로운 도전',
            subtitle: '트레이너와 함께 체계적인 운동을 시작해 보세요.',
            buttonText: '상담 예약하기'
        }
    },
    HomeHeroBlock: {
        name: '홈 히어로 (이미지 배경)',
        component: defineAsyncComponent(() => import('./HomeHeroBlock.vue')),
        defaultData: {
            title: '건강한 변화를<br />함께 만들어 갑니다.',
            description: '7년 경력의 전문 퍼스널 트레이너 유도환 입니다.<br>체계적인 프로그램으로 여러분의 목표 달성을 함께합니다.',
            imageUrl: 'https://picsum.photos/480/700?random=1',
            buttonText: '수업 신청하기'
        }
    },
    CareerBlock: {
        name: '경력 소개',
        component: defineAsyncComponent(() => import('./CareerBlock.vue')),
        defaultData: {
            title: '8년, 312명',
            description: '긴 시간 동안 많은 회원들을 만나며<br>312번의 경력을 탄탄히 다졌습니다.',
            imageUrl: 'https://picsum.photos/480/500?random=2'
        }
    },
    KnowhowBlock: {
        name: '노하우 (이미지+텍스트)',
        component: defineAsyncComponent(() => import('./KnowhowBlock.vue')),
        defaultData: {
            description: '근육은 풍선이 아닙니다.<br>안정적이고, 점진적인 근육량 증가를 위해서는 내제적인 건강이 우선입니다.',
            imageUrl: 'https://picsum.photos/300/400?random=3'
        }
    },
    VisionBlock: {
        name: '비전 (풀 이미지)',
        component: defineAsyncComponent(() => import('./VisionBlock.vue')),
        defaultData: {
            description: '회원님에게 알맞는 프로그램 설계를 시작으로, 회원님의 성장에 따라 프로그램도 재설계 됩니다.',
            imageUrl: 'https://picsum.photos/480/300?random=4'
        }
    },
    GoodsSlideBlock: {
        name: '상품 슬라이드',
        component: defineAsyncComponent(() => import('./GoodsSlideBlock.vue')),
        defaultData: {
            title: 'PT 상품',
            showViewAll: true,
            items: [
                { name: 'PT 10회', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=pt1' },
                { name: 'PT 20회', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=pt2' }
            ]
        }
    },
    SolutionCardBlock: {
        name: '솔루션 카드',
        component: defineAsyncComponent(() => import('./SolutionCardBlock.vue')),
        defaultData: {
            title: '회원님께 맞는 솔루션',
            showMore: true,
            cards: [
                {
                    name: '헬스 + PT 10회',
                    subtitle: 'PT만 하면 뭐해~<br>헬스장에서 개인 운동까지!',
                    price: '₩250,000 원',
                    features: [
                        { text: '전체 수입 운동기구 구비 완료', highlight: false },
                        { text: '샤워장 구비 완료', highlight: false },
                        { text: '맞춤형 식사 습관 연습', highlight: true }
                    ]
                }
            ]
        }
    },
    TextBlock: {
        name: '텍스트 블록',
        component: defineAsyncComponent(() => import('./TextBlock.vue')),
        defaultData: {
            title: '소제목을 입력하세요',
            content: '이곳에 상세 내용을 입력할 수 있습니다.'
        }
    }
}

/**
 * 특정 타입의 블록 데이터를 가져오는 헬퍼
 */
export function getBlockConfig(type) {
    return blockRegistry[type] || null
}

/**
 * 사용 가능한 블록 리스트 반환 (사이드바용)
 */
export function getAvailableBlocks() {
    return Object.keys(blockRegistry).map(type => ({
        type,
        name: blockRegistry[type].name
    }))
}
