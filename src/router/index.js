import {createRouter, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SkillView from '../views/SkillView.vue'
import ArtView from '../views/ArtView.vue'
import ContactView from '../views/ContactView.vue'
import ResumeView from '../views/ResumeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AboutMeView
        },
        {
            path: '/about-me',
            name: 'aboutMe',
            component: AboutMeView
        },
        {
            path: '/skill',
            name: 'skill',
            component: SkillView
        },
        {
            path: '/art',
            name: 'art',
            component: ArtView
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        }

    ]
})

export default router
