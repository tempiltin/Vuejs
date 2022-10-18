import { createRouter ,createWebHistory  } from "vue-router";
import Document from "../components/Doc/Document.vue"
import Index from '../Page/Index.vue'
import VueDocs from "../Page/VueDocs.vue"
import VueDocsRouter from "../components/VueDocs/Docs.vue"
import Laravel from "../Page/layout/Laravel.vue"
import Bootsrap from "../Page/layout/Bootstrap.vue"
import BootsrapPage from "../Page/BootstrapPage.vue"
import React from "../Page/layout/React.vue"
import ReactPage from "../Page/ReactPage.vue"
const routes =[

    {
        path:"/laravel",
        name:"Index",
        component: Laravel,
        children : [
            {
                path:"docs",
                name:"Index",
                component:Document,
            },
        ]
    },
   
    {
        path:"/vue-js",
        name:"Vue js",
        component:VueDocs,
        children:[
            {
                path:"docs",
                name:"Vue js",
                component:VueDocsRouter
            }
        ]
    },
    {
        path:"/bootstrap-5-2-0",
        name:"Bootstrap 5.2.0",
        component:Bootsrap,
        children:[
            {
                path:"docs",
                name:"Bootstrap docs",
                component:BootsrapPage
            }
        ]
    },
    {
        path:"/react-js-18-2-0",
        name:"React js 18.2.0 version",
        component:React,
        children:[
            {
                path:"docs",
                name:"React js docs",
                component:ReactPage
            }
        ]
    },


   
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router