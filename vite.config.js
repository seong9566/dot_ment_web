import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // 외부 접속 허용 
    server: {
        // 0.0.0.0 모든 접속 허용
        host: '0.0.0.0',
        port: 5173,
    }
})
