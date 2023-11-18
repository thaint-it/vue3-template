import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/info/DashboardView.vue'
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
      component: DashboardView,
      meta: {
        layout: 'TheDashboardLayout',
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
      component: DashboardView,
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
