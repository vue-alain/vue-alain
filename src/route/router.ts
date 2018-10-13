import Vue from 'vue';
import Router from 'vue-router';
import dashboardrouter from './dashboard.router';

import listrouter from './list.router';
import formrouter from './form.router';
import detailrouter from './detail.router';
import widgetsrouter from './widgets.router';
import passportrouter from './passport.router';


Vue.use(Router);



export default new Router({
  base: process.env.BASE_URL,
  routes: [
    dashboardrouter,
    listrouter,
    formrouter,
    detailrouter,
    widgetsrouter,
    passportrouter,
  ],
});
