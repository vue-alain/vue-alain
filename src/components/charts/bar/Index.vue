<template>
<ve-histogram 
        :height="chartHeight"
        :data="chartData" 
        :legend-visible="false" 
        :colors="[color]" 
        :extend="extendSettings"></ve-histogram>
</template>

<script   lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Bar extends Vue {

    @Prop({ type: Number, default: 251})
    private height!: number;

    @Prop({type: Array, default: () => []})
    private data!: any[];

    @Prop({type: String, default: '#1890FF'})
    private color!: string;

    @Prop({type: String, default: ''})
    private title!: string;

    get chartHeight() {
      return `${this.height}px`;
    }

    get extendSettings() {
      return {
        title: {
          text: this.title,
          x: 'center',
        },
      };
    }

    get chartData() {
      return {
          columns: ['x', 'y'],
          rows: this.data,
        };
    }
}
</script>

<style scoped>
</style>