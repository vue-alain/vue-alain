import NumberInfo from './numberinfo/Index.vue';

export default {
    install: ( Vue: any ) => {
        Vue.component('av-number-info', NumberInfo);
    },
  };
