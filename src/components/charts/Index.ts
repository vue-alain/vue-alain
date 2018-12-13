import MiniBar from './minibar/Index.vue';
import Bar from './bar/Index.vue';
import MiniArea from './miniarea/Index.vue';
import MiniProgress from './miniprogress/Index.vue';
import RankingList from './rankinglist/Index.vue';
import Trend from './trend/Index.vue';
import ChartCard from './chartcard/Index.vue';
import Pie from './pie/Index.vue';
import TimelineChart from './timelinechart/Index.vue';
import WaterWave from './waterwave/Index.vue';
import TagCloud from './tagcloud/Index.vue';
import Gauge from './gauge/Index.vue';

import numeral from 'numeral';

const yuan = (val: any) => `¥ ${numeral(val).format('0,0')}`;

export default {
    install: ( Vue: any ) => {
        Vue.component('av-mini-bar', MiniBar);
        Vue.component('av-bar', Bar);
        Vue.component('av-mini-area', MiniArea);
        Vue.component('av-mini-progress', MiniProgress);
        Vue.component('av-ranking-list', RankingList);
        Vue.component('av-trend', Trend);
        Vue.component('av-chart-card', ChartCard);
        Vue.component('av-pie', Pie);
        Vue.component('av-timeline-chart', TimelineChart);
        Vue.component('av-water-wave', WaterWave);
        Vue.component('av-tag-cloud', TagCloud);
        Vue.component('av-gauge', Gauge);
        Object.defineProperty( Vue.prototype, '$yuan', { value: yuan } );
        Object.defineProperty( Vue.prototype, '$numeral', { value: numeral } );
    },
};
