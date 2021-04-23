import VueRouter from 'vue-router'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";
import Navigation from "../views/Navigation";


const routes = [
    {
        path: '/',
        name: '导航一',
        component: Navigation,
        children: [
            {
                path: '/pageOne',
                name:'页面一',
                component: PageOne
            },
            {
                path: '/pageTwo',
                name: '页面二',
                component: PageTwo
            },
        ]
    },
    {
        path: "/",
        name: '导航二',
        component: Navigation,
        children: [
            {
                path: 'pageThree',
                name: '页面三',
                component:PageThree
            },
            {
                path: 'pageFour',
                name: '页面四',
                component: PageFour
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
