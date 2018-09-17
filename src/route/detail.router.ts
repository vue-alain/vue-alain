import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/detail',
    component: MainLayout,
    name: '/detail',
    meta: {
        title: '详情页',
        icon: 'profile',
    },
    children: [{
      path: 'basic',
      name: '/detail/basic',
      component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/Basic.vue'),
      meta: {
        title: '基础详情页',
      },
    },
    {
      path: 'advanced',
      name: '/detail/advanced',
      component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/Advanced.vue'),
      meta: {
        title: '高级详情页',
      },
    }],
  };

export default router;
