import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name:'projects',
            component: ProjectsView
        },
        {
            path: '/skills',
            name:'skills',
            component: SkillsView
        },
        {
            path: '/about',
            name:'about',
            component: AboutView
        },
        
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        }

    ]
})

export const sharedData = {
    value: null,
};


export default router
