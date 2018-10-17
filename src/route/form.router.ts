import MainLayout from '@/layout/main/MainLayout.vue';

const router = {
    path: '/form',
    component: MainLayout,
    name: '/form',
    meta: {
        title: '表单页',
        icon: 'form',
        i18n: `menu.form`,
    },
    children: [{
      path: 'basic',
      name: '/form/basic',
      component: () => import(/* webpackChunkName: "form" */ '@/views/form/Basic.vue'),
      meta: {
        title: '基础表单',
        i18n: `menu.form.basicform`,
      },
    },
    {
      path: 'step',
      name: '/form/step',
      component: () => import(/* webpackChunkName: "form" */ '@/views/form/Step.vue'),
      meta: {
        title: '分步表单',
        i18n: `menu.form.stepform`,
      },
    },
    {
      path: 'advanced',
      name: '/form/advanced',
      component: () => import(/* webpackChunkName: "form" */ '@/views/form/Advanced.vue'),
      meta: {
        title: '高级表单',
        i18n: `menu.form.advancedform`,
      },
    }],
  };

export default router;
