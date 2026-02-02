import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/builder'
        },
        {
            path: '/builder',
            name: 'builder',
            component: () => import('../views/BuilderView.vue')
        },
        {
            path: '/home-old',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router
