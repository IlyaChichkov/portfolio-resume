import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from "@/components/MainPage";
import ContactMe from "@/components/ContactMe";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactMe
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
