import { createRouter, createWebHistory } from 'vue-router';
import MembersView from '../views/MembersView.vue'
import TeamsView from '../views/TeamView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MembersView
    },
    {
        path: '/members',
        name: 'members',
        component: MembersView
    },
    {
        path: '/teams',
        name: 'teams',
        component: TeamsView
    },
]

//Create Router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router