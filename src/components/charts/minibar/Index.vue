<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">
      <v-chart :force-fit="true"
      :height="height"
      :data="data"
      :padding="[36, 5, 18, 5]">
        <v-tooltip />
        <v-bar position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./../index.less";
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {format} from 'date-fns';


const data: any[] = [];

const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (let i = 0; i < fakeY.length; i += 1) {
  data.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const tooltip = [
  'x*y',
  (x: any, y: any) => ({
    name: x,
    value: y,
  }),
];
const scale = [{
  dataKey: 'x',
  min: 2,
}, {
  dataKey: 'y',
  title: '时间',
  min: 1,
  max: 22,
}];

@Component({
  components: {
  },
})
export default class MiniBar extends Vue {

    @Prop({type: Number, default: 100})
    private height!: number;

    @Prop({type: Array, default: () => data})
    private data!: any[];
}
</script>
