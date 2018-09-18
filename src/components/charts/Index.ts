import MiniBar from './minibar/Index.vue';
import Bar from './bar/Index.vue';
import MiniArea from './miniarea/Index.vue';
import MiniProgress from './miniprogress/Index.vue';
import Radar from './radar/Index.vue';
import RankingList from './rankinglist/Index.vue';
import Trend from './trend/Index.vue';
import ChartCard from './chartcard/Index.vue';
import Pie from './pie/Index.vue';
import TimelineChart from './timelinechart/Index.vue';

import numeral from 'numeral';

const yuan = (val: any) => `¥ ${numeral(val).format('0,0')}`;

export default {
    install: ( Vue: any ) => {
        Vue.component('av-g2-mini-bar', MiniBar);
        Vue.component('av-g2-bar', Bar);
        Vue.component('av-g2-mini-area', MiniArea);
        Vue.component('av-g2-mini-progress', MiniProgress);
        Vue.component('av-g2-radar', Radar);
        Vue.component('av-g2-ranking-list', RankingList);
        Vue.component('av-g2-trend', Trend);
        Vue.component('av-g2-chart-card', ChartCard);
        Vue.component('av-g2-pie', Pie);
        Vue.component('av-g2-timeline-chart', TimelineChart);
        Object.defineProperty( Vue.prototype, '$yuan', { value: yuan } );
        Object.defineProperty( Vue.prototype, '$numeral', { value: numeral } );
    },
  };
