import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import { IS_USER_AUTHENTICATED } from "../store/storeconstants";
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/AuthPage.vue'),
            children:[
                {
                    path: '',
                    name: 'login.login',
                    component: () => import('../views/FormLogin.vue')
                },
                {
                    path: '/register',
                    name: 'login.register',
                    component: () => import('../views/FormRegister.vue')
                }
            ]
        },
        {
            path: '/',
            component: () => import('../pages/MainPage.vue'),
            redirect:{name:'dashboard.dashboard'},
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard.dashboard',
                    component: () => import('../views/ContentDashboard.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log(store.getters[`auth/${IS_USER_AUTHENTICATED}`])
                        if(!store.getters[`auth/${IS_USER_AUTHENTICATED}`]){
                            return next({
                                name: 'login.login'
                            })
                        }else{
                            next()
                        }
                    }
                },
                {
                    path: '/administrator',
                    name: 'dashboard.administrator',
                    component: () => import('../views/ContentAdmin.vue')
                },
                {
                    path: '/setting',
                    name: 'dashboard.setting',
                    component: () => import('../views/ContentSetting.vue')
                }
            ]
        }
    ],
    // routes: [
    //     {
    //     path: "/",
    //     component: () => import('../components/LoginView.vue'),
    //   },
    //   {
    //     path: "/home",
    //     component: () => import('../components/WelcomeView.vue'),
    //   },
    
    // ],
    linkActiveClass: 'active'
})