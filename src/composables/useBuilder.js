import { useBuilderStore } from '@/stores/useBuilderStore'
import { storeToRefs } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

/**
 * 웹 빌더의 핵심 로직을 담당하는 Composable
 */
export function useBuilder() {
    const store = useBuilderStore()
    const { blocks, selectedBlockId } = storeToRefs(store)

    /**
     * 새로운 블록 추가
     * @param {string} type 블록 타입 (예: 'HeroBlock')
     * @param {object} defaultData 초기 데이터
     * @param {number} index 추가할 위치 (생략 시 맨 마지막)
     */
    function addBlock(type, defaultData = {}, index = null) {
        const newBlock = {
            id: uuidv4(),
            type,
            data: { ...defaultData },
            styles: {}
        }

        const newBlocks = [...blocks.value]
        if (index === null) {
            newBlocks.push(newBlock)
        } else {
            newBlocks.splice(index, 0, newBlock)
        }

        store.setBlocks(newBlocks)
        selectedBlockId.value = newBlock.id
    }

    /**
     * 블록 삭제
     * @param {string} id 삭제할 블록 ID
     */
    function removeBlock(id) {
        const newBlocks = blocks.value.filter(block => block.id !== id)
        store.setBlocks(newBlocks)
        if (selectedBlockId.value === id) {
            selectedBlockId.value = null
        }
    }

    /**
     * 블록 순서 변경 (Move Up/Down)
     */
    function moveBlock(id, direction) {
        const index = blocks.value.findIndex(b => b.id === id)
        if (index === -1) return

        const newIndex = direction === 'up' ? index - 1 : index + 1
        if (newIndex < 0 || newIndex >= blocks.value.length) return

        const newBlocks = [...blocks.value]
        const [movedBlock] = newBlocks.splice(index, 1)
        newBlocks.splice(newIndex, 0, movedBlock)

        store.setBlocks(newBlocks)
    }

    /**
     * 블록 데이터 업데이트
     */
    function updateBlockData(id, newData) {
        const newBlocks = blocks.value.map(block => {
            if (block.id === id) {
                return { ...block, data: { ...block.data, ...newData } }
            }
            return block
        })
        store.setBlocks(newBlocks)
    }

    function reorderBlocks(pageId, oldIndex, newIndex) {
        store.reorderBlocks(pageId, oldIndex, newIndex)
    }

    return {
        blocks,
        selectedBlockId,
        addBlock,
        removeBlock,
        moveBlock,
        updateBlockData,
        reorderBlocks,
        undo: store.undo,
        redo: store.redo
    }
}
