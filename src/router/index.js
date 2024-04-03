import { createWebHistory, createRouter } from "vue-router";

import Signup from '../components/Signup'
import Login from '../components/Login'
import HomeComponent from '@/components/layout/HomeComponent.vue'
import CarList from '@/components/CarList.vue'
import AddCar from '@/components/AddCar.vue'
import EditCar from '@/components/EditCar.vue'
import CategoryList from '@/components/category/CategoryList.vue'
import AddCategory from '@/components/category/AddCategory.vue'
import EditCategory from '@/components/category/EditCategory.vue'
import NotFound from "@/views/Page404.vue"
const routes = [
    {
        path : '/register',
        name : 'SignUpPage',
        component: Signup
    },
    {
        path : '/login',
        name : 'login',
        component: Login
    },
    {
        path : '/',
        name : 'home',
        component: CarList,
        meta:{
            layout: HomeComponent
          }
    },
    {
        path : '/AddCar',
        name : 'AddCar',
        component: AddCar,
        meta:{
            layout: HomeComponent
          }
    },
    {
        path : '/editCar/:id',
        name : 'EditCar',
        component: EditCar,
        meta:{
            layout: HomeComponent
        }
    },
    {
        path : '/CategoryList',
        name : 'CategoryList',
        component: CategoryList,
        meta:{
            layout: HomeComponent
          }
    },
    {
        path : '/AddCategory',
        name : 'AddCategory',
        component: AddCategory,
        meta:{
            layout: HomeComponent
          }
    },
    {
        path : '/editCategory/:id',
        name : 'EditCategory',
        component: EditCategory,
        meta:{
            layout: HomeComponent
          }
    },
    {
        path: "/:NotFound(.*)*",
        name: "NotFound",
        component: NotFound,
      },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }
    

    next();
})

export default router