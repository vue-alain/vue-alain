import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/widgets',
    component: MainLayout,
    name: '/widgets',
    redirect: '/widgets/index',
    meta: {
        title: '小组件',
        icon: 'appstore-o',
    },
    children: [{
        path: 'index',
        name: '/widgets/index',
        component: () => import(/* webpackChunkName: "widgets" */ '@/views/widgets/Index.vue'),
        meta: {
          title: '组件主页',
        },
      },
    ],
  };

export default router;
