import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/detail',
    component: MainLayout,
    name: '/detail',
    redirect: '/detail/basic',
    meta: {
        title: '详情页',
        icon: 'profile',
        i18n: `menu.profile`,
    },
    children: [{
      path: 'basic',
      name: '/detail/basic',
      component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/Basic.vue'),
      meta: {
        title: '基础详情页',
        i18n: `menu.profile.basic`,
      },
    },
    {
      path: 'advanced',
      name: '/detail/advanced',
      component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/Advanced.vue'),
      meta: {
        title: '高级详情页',
        i18n: `menu.profile.advanced`,
      },
    }],
  };

export default router;
