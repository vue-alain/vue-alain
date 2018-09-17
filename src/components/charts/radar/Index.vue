<template>
   <v-chart :forceFit="true" height="400" :data="data" :padding="[20, 20, 95, 20]" :scale="scale">
      <v-tooltip  />
      <v-axis :dataKey="axis1Opts.dataKey" :line="axis1Opts.line" :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid" />
      <v-axis :dataKey="axis2Opts.dataKey" :line="axis2Opts.line" :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid" />
      <v-legend dataKey="user" marker="circle" :offset="30" />
      <v-coord type="polar" radius="0.8" />
      <v-line position="item*score" color="user" :size="2" />
      <v-point position="item*score" color="user" :size="4" shape="circle" />
    </v-chart>
</template>

<style scoped lang="less">
.mini-progress {
    padding: 5px 0;
    position: relative;
    width: 100%;
    .wrap {
      background-color: #f5f5f5;
      position: relative;
    }
    .progress {
      transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
      border-radius: 1px 0 0 1px;
      background-color: #13C2C2;
      width: 0;
      height: 100%;
    }
    .target {
      position: absolute;
      top: 0;
      bottom: 0;
      span {
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 2px;
      }
      span:last-child {
        top: auto;
        bottom: 0;
      }
    }
  }
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const DataSet = require('@antv/data-set');

const sourceData = [
  {item: '引用', a: 70, b: 30, c: 40},
  {item: '口碑', a: 60, b: 70, c: 40},
  {item: '产量', a: 50, b: 60, c: 40},
  {item: '贡献', a: 40, b: 50, c: 40},
  {item: '热度', a: 60, b: 70, c: 40},
  {item: '引用', a: 70, b: 50, c: 40},
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a', 'b', 'c'],
  key: 'user',
  value: 'score',
});

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

const data = dv.rows;

const axis1Opts = {
  dataKey: 'item',
  line: null,
  tickLine: null,
  grid: {
    lineStyle: {
      lineDash: null,
    },
    hideFirstLine: false,
  },
};

const axis2Opts = {
  dataKey: 'score',
  line: null,
  tickLine: null,
  grid: {
    type: 'polygon',
    lineStyle: {
      lineDash: null,
    },
  },
};

@Component({
  components: {
  },
})
export default class Radar extends Vue {

  private sourceData = sourceData;
  private data = data;
  private axis1Opts = axis1Opts;
  private axis2Opts = axis2Opts;
  private scale = scale;

}
</script>
