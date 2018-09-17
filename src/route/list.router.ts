import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/list',
    component: MainLayout,
    name: '/list',
    meta: {
        title: '列表页',
        icon: 'table',
    },
    children: [{
      path: 'query',
      name: '/list/query',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Query.vue'),
      meta: {
        title: '查询表格',
      },
    },
    {
      path: 'primary',
      name: '/list/primary',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Primary.vue'),
      meta: {
        title: '标准表格',
      },
    },
    {
      path: 'card',
      name: '/list/card',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Card.vue'),
      meta: {
        title: '卡片列表',
      },
    }],
  };

export default router;
