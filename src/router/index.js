import {createRouter, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SkillView from '../views/SkillView.vue'
import ThreeDView from '../views/ThreeDView.vue'
import TwoView from '../views/TwoDView.vue'
import ContactView from '../views/ContactView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: SkillView
        },
        {
            path: '/skill',
            name: 'skill',
            component: SkillView
        },
        {
            path: '/3d',
            name: '3d',
            component: ThreeDView
        },
        {
            path: '/2d',
            name: '2d',
            component: TwoView
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
        }
    ]
})

export default router
