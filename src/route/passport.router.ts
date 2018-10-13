import PassportLayout from '@/layout/passport/passport.component.vue';

const router = {
    path: '/passport',
    component: PassportLayout,
    name: '/passport',
    redirect: '/passport/login',
    meta: {
        title: '登录页',
        icon: 'appstore-o',
    },
    children: [{
        path: 'login',
        name: '/passport/login',
        component: () => import(/* webpackChunkName: "widgets" */ '@/views/passport/login/login.vue'),
        meta: {
          title: '登录',
        },
      },
    ],
  };

export default router;
