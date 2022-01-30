import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PoliticianDetail from '../views/PoliticianDetail/PoliticianDetail.vue'
import StateDetail from '../views/StateDetail/StateDetail.vue'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        redirect: 'home',
        children: [
            { path: '/', name: 'home', component: Home },
            {
                path: 'partidos/:state',
                component: StateDetail,
                name: 'stateDetail',
            },
            {
                path: 'politicos/:id',
                component: PoliticianDetail,
                name: 'politicianDetail',
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
