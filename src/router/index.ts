import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/dashboard/HomeView.vue'
import Comminucation from '@/views/dashboard/CommunicationView.vue'
import Culture from '@/views/dashboard/CultureView.vue'
import Family from '@/views/dashboard/FamilyView.vue'
import Sport from '@/views/dashboard/SportView.vue'
import Tourism from '@/views/dashboard/TourismView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import UserView from '@/views/user/UserView.vue'
import FormView from '@/views/form/FormView.vue'
import {useAuthStore} from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/communication',
      name: 'communication',
      component: Comminucation,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/culture',
      name: 'culture',
      component: Culture,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/family',
      name: 'family',
      component: Family,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    
    {
      path: '/sport',
      name: 'sport',
      component: Sport,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: Tourism,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/communication',
      name: 'communication',
      component: Comminucation,
      meta: {
        layout: 'TheDashboardLayout',
        showNavigationBar:true
      },
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: {
        layout: 'TheDashboardLayout',
      },
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
      meta: {
        layout: 'TheDashboardLayout',
      },
    },
    {
      path: '/info/:id',
      name: 'info',
      component: HomeView,
      meta: {
        layout: 'TheDashboardLayout',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'TheDefaultLayout',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
      meta: {
        layout: 'TheDefaultLayout',
      },
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  if (authRequired && !auth.accessToken) {
      // authRequired.returnUrl = to.fullPath;
      return '/login';
  }
});
export default router
