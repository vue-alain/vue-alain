import NumberInfo from './numberinfo/Index.vue';
import PageHeader from './pageheader/Index.vue';
import FooterToolbar from './footertoolbar/Index.vue';
import Result from './result/Index.vue';
import StandardTable from './standardtable/Index.vue';

export default {
    install: ( Vue: any ) => {
        Vue.component('av-number-info', NumberInfo);
        Vue.component('av-page-header', PageHeader);
        Vue.component('av-footer-toolbar', FooterToolbar);
        Vue.component('av-result', Result);
        Vue.component('av-standard-table', StandardTable);
    },
};

