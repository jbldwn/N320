import { createRouter, createWebHistory } from 'vue-router';
import SessionsView from '../view/SessionsView.vue';
import MySessionsView from '../view/MySessionsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: SessionsView
    },
    {
        path: '/sessions',
        name: 'sessions',
        component: SessionsView
    },
    {
        path: '/mysessions',
        name: 'mysessions',
        component: MySessionsView
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;