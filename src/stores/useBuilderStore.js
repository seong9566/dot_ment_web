import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBuilderStore = defineStore('builder', () => {
    /**
     * 전체 사이트 구조
     * pages: [{ id, name, tabs: [{ id, label, blocks: [] }] }]
     */
    const siteStructure = ref([
        {
            id: 'page-home-main',
            name: '메인 홈',
            tabs: [
                {
                    id: 'home',
                    label: '홈',
                    blocks: [
                        {
                            id: 'initial-hero',
                            type: 'HomeHeroBlock',
                            data: {
                                title: '건강한 변화를<br /><span class="underline-text">함께 만들어 갑니다.</span>',
                                description: '7년 경력의 전문 퍼스널 트레이너 유도환 입니다.<br>체계적인 프로그램으로 여러분의 목표 달성을 함께합니다.',
                                imageUrl: 'https://picsum.photos/480/700?random=1',
                                buttonText: '수업 신청하기'
                            }
                        },
                        {
                            id: 'initial-career',
                            type: 'CareerBlock',
                            data: {
                                title: '8년, 312명',
                                description: '긴 시간 동안 많은 회원들을 만나며<br>312번의 경력을 탄탄히 다졌습니다.',
                                imageUrl: 'https://picsum.photos/480/500?random=2'
                            }
                        },
                        {
                            id: 'initial-knowhow',
                            type: 'KnowhowBlock',
                            data: {
                                description: '근육은 풍선이 아닙니다.<br>안정적이고, 점진적인<br>근육량 증가를<br>위해서는 내제적인<br>건강이 우선입니다.',
                                imageUrl: 'https://picsum.photos/300/400?random=3'
                            }
                        },
                        {
                            id: 'initial-vision',
                            type: 'VisionBlock',
                            data: {
                                description: '회원님에게 알맞는 프로그램 설계를 시작으로,<br>회원님의 성장에 따라 프로그램도 재설계 되며<br>회원님의 목적지까지 늘 새로운 경험을 약속합니다.',
                                imageUrl: 'https://picsum.photos/480/300?random=4'
                            }
                        }
                    ]
                },
                {
                    id: 'pt',
                    label: 'PT 상품',
                    blocks: [
                        {
                            id: 'initial-pt-list',
                            type: 'GoodsSlideBlock',
                            data: {
                                title: 'PT',
                                showViewAll: true,
                                items: [
                                    { name: 'PT 10회', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=pt1' },
                                    { name: 'PT 20회', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=pt2' },
                                    { name: 'PT 30회', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=pt3' }
                                ]
                            }
                        },
                        {
                            id: 'initial-gym-list',
                            type: 'GoodsSlideBlock',
                            data: {
                                title: 'GYM',
                                showViewAll: true,
                                items: [
                                    { name: '상품 제목', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=gym1' },
                                    { name: '상품 제목', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=gym2' },
                                    { name: '상품 제목', description: '상품 상세 설명', price: '가격', imageUrl: 'https://picsum.photos/436/464?random=gym3' }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'schedule',
                    label: '수업 일정',
                    blocks: [
                        {
                            id: 'initial-solution-cards',
                            type: 'SolutionCardBlock',
                            data: {
                                title: '회원님께 맞는 솔루션 선택하기',
                                showMore: true,
                                cards: [
                                    {
                                        name: '헬스 + PT 10회',
                                        subtitle: 'PT만 하면 뭐해~<br>헬스장에서 개인 운동까지!',
                                        price: '₩250,000 원',
                                        features: [
                                            { text: '전체 수입 운동기구 구비 완료', highlight: false },
                                            { text: '샤워장 구비 완료', highlight: false },
                                            { text: '할 말이 없네', highlight: false },
                                            { text: '맞춤형 식사 습관 연습', highlight: true },
                                            { text: '기초를 다질 수 있는 기본 솔루션!', highlight: true }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'page-second',
            name: '두번째 페이지',
            tabs: [
                {
                    id: 'tab-1',
                    label: '탭1',
                    blocks: []
                },
                {
                    id: 'tab-2',
                    label: '탭2',
                    blocks: []
                },
                {
                    id: 'tab-3',
                    label: '탭3',
                    blocks: []
                }
            ]
        }
    ])

    const siteSettings = ref({
        trainerName: 'Tan Trainer',
        logoUrl: null
    })

    const currentPageId = ref('page-home-main')
    const currentTabId = ref('home')
    const selectedBlockId = ref(null)

    // Undo/Redo (전체 사이트 구조 스냅샷)
    const history = ref([])
    const historyIndex = ref(-1)

    // Getters
    const currentPage = computed(() => {
        return siteStructure.value.find(page => page.id === currentPageId.value) || null
    })
    const currentTab = computed(() => {
        if (!currentPage.value) return null
        return currentPage.value.tabs.find(tab => tab.id === currentTabId.value) || null
    })
    const blocks = computed(() => currentTab.value?.blocks || [])

    // Actions
    function setBlocks(newBlocks) {
        if (!currentTab.value) return
        currentTab.value.blocks = newBlocks
        recordHistory()
    }

    function recordHistory() {
        const snapshot = JSON.stringify({
            structure: siteStructure.value,
            settings: siteSettings.value
        })
        if (historyIndex.value < history.value.length - 1) {
            history.value = history.value.slice(0, historyIndex.value + 1)
        }
        history.value.push(snapshot)
        historyIndex.value = history.value.length - 1
        if (history.value.length > 50) {
            history.value.shift()
            historyIndex.value--
        }
    }

    function undo() {
        if (historyIndex.value > 0) {
            historyIndex.value--
            const state = JSON.parse(history.value[historyIndex.value])
            siteStructure.value = state.structure
            siteSettings.value = state.settings
        }
    }

    function redo() {
        if (historyIndex.value < history.value.length - 1) {
            historyIndex.value++
            const state = JSON.parse(history.value[historyIndex.value])
            siteStructure.value = state.structure
            siteSettings.value = state.settings
        }
    }

    function addPage(name) {
        const newPage = { id: `page-${Date.now()}`, name, tabs: [] }
        siteStructure.value.push(newPage)
        recordHistory()
        return newPage.id
    }

    function updateSettings(newSettings) {
        siteSettings.value = { ...siteSettings.value, ...newSettings }
        recordHistory()
    }

    function addTab(label = '새 탭') {
        if (!currentPage.value) return
        const newTabId = `tab-${Date.now()}`
        currentPage.value.tabs.push({ id: newTabId, label, blocks: [] })
        setActiveTab(newTabId)
        recordHistory()
    }

    function updateTabLabel(tabId, label) {
        if (!currentPage.value) return
        currentPage.value.tabs = currentPage.value.tabs.map(tab => tab.id === tabId ? { ...tab, label } : tab)
        recordHistory()
    }

    function removeTab(tabId) {
        if (!currentPage.value) return
        currentPage.value.tabs = currentPage.value.tabs.filter(tab => tab.id !== tabId)
        const nextActive = currentPage.value.tabs[0]?.id || null
        if (nextActive) {
            setActiveTab(nextActive)
        } else {
            currentTabId.value = null
        }
        recordHistory()
    }

    function setActivePage(pageId) {
        const targetPage = siteStructure.value.find(page => page.id === pageId)
        if (!targetPage) return
        currentPageId.value = pageId
        currentTabId.value = targetPage.tabs[0]?.id || null
    }

    function setActiveTab(tabId) {
        if (!currentPage.value) return
        const exists = currentPage.value.tabs.find(tab => tab.id === tabId)
        if (!exists) return
        currentTabId.value = tabId
    }

    function moveBlockInternal(pageId, tabId, blockId, direction) {
        const page = siteStructure.value.find(p => p.id === pageId)
        if (!page) return
        const tab = page.tabs.find(t => t.id === tabId)
        if (!tab) return

        const index = tab.blocks.findIndex(b => b.id === blockId)
        if (index === -1) return

        const newIndex = direction === 'up' ? index - 1 : index + 1
        if (newIndex >= 0 && newIndex < tab.blocks.length) {
            const blocks = [...tab.blocks]
                ;[blocks[index], blocks[newIndex]] = [blocks[newIndex], blocks[index]]
            tab.blocks = blocks
            recordHistory()
        }
    }

    function reorderBlocks(pageId, tabId, oldIndex, newIndex) {
        const page = siteStructure.value.find(p => p.id === pageId)
        if (!page) return
        const tab = page.tabs.find(t => t.id === tabId)
        if (!tab) return

        const blocks = [...tab.blocks]
        const [movedBlock] = blocks.splice(oldIndex, 1)
        blocks.splice(newIndex, 0, movedBlock)
        tab.blocks = blocks
        recordHistory()
    }

    return {
        siteStructure,
        siteSettings,
        currentTabId,
        currentPageId,
        blocks,
        selectedBlockId,
        currentTab,
        currentPage,
        setBlocks,
        undo,
        redo,
        addPage,
        updateSettings,
        addTab,
        updateTabLabel,
        removeTab,
        setActivePage,
        setActiveTab,
        moveBlockInternal,
        reorderBlocks,
        canUndo: () => historyIndex.value > 0,
        canRedo: () => historyIndex.value < history.value.length - 1
    }
})
