import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/list',
    component: MainLayout,
    name: '/list',
    redirect: '/list/query',
    meta: {
        title: '列表页',
        icon: 'table',
        routerGuard: true,
        i18n: `menu.list`,
    },
    children: [{
      path: 'query',
      name: '/list/query',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Query.vue'),
      meta: {
        title: '查询表格',
        routerGuard: true,
        i18n: `menu.list.searchtable`,
      },
    },
    {
      path: 'primary',
      name: '/list/primary',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Primary.vue'),
      meta: {
        title: '标准表格',
        routerGuard: true,
        i18n: `menu.list.basiclist`,
      },
    },
    {
      path: 'card',
      name: '/list/card',
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/Card.vue'),
      meta: {
        title: '卡片列表',
        routerGuard: true,
        i18n: `menu.list.cardlist`,
      },
    }],
  };

export default router;
