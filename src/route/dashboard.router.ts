import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '',
    component: MainLayout,
    redirect: '/analysis',
    name: '/',
    meta: {
        title: '工作台',
        icon: 'dashboard',
        routerGuard: true,
        i18n: `menu.dashboard`,
    },
    children: [{
      path: '/analysis',
      name: '/analysis',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Analysis.vue'),
      meta: {
        title: '分析页',
        routerGuard: true,
        i18n: `menu.dashboard.analysis`,
      },
    },
    {
      path: '/monitor',
      name: '/monitor',
      routerGuard: true,
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Monitor.vue'),
      meta: {
        title: '监控页',
        routerGuard: true,
        i18n: `menu.dashboard.monitor`,
      },
    },
    {
      path: '/workplace',
      name: '/workplace',
      routerGuard: true,
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Workplace.vue'),
      meta: {
        title: '工作台',
        routerGuard: true,
        i18n: `menu.dashboard.workplace`,
      },
    }],
  };

export default router;
