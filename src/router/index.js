import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import MembersView from '../views/MembersView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/members',
        name: 'members',
        //lazy loading
        component: () => import('../views/MembersView.vue')
    },
    // {
    //     path: '/props',
    //     name: 'props',
    //     component: PropsSlots
    // }
]

//Create Router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router