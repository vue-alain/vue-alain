<template>
  <div >
    <h4>{{title}}</h4>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-bar position="x*y"/>
    </v-chart>
  </div>
</template>

<script   lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {format} from 'date-fns';

const data: any = [];
for (let i = 0; i < 12; i += 1) {
  data.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
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

@Component({})
export default class Bar extends Vue {

    @Prop({type: String, default: '标题'})
    private title!: string;

    @Prop({type: Array, default: []})
    private data!: any;

    @Prop({type: Number, default: 251})
    private height!: number;
}
</script>

<style scoped>
</style>