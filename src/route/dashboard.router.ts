import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '',
    component: MainLayout,
    redirect: '/analysis',
    meta: {
        title: '工作台',
        icon: 'dashboard',
    },
    children: [{
      path: '/analysis',
      name: '/analysis',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Analysis.vue'),
      meta: {
        title: '分析页',
      },
    },
    {
      path: '/monitor',
      name: '/monitor',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Monitor.vue'),
      meta: {
        title: '监控页',
      },
    },
    {
      path: '/workplace',
      name: '/workplace',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Workplace.vue'),
      meta: {
        title: '工作台',
      },
    }],
  };

export default router;
