<template>
<ve-ring :data="pieData" 
:legend-visible="!isPercent" 
:settings="chartSettings"
:extend="extendSettings" 
:height="chartHeight" 
:tooltip-visible="!isPercent"></ve-ring>

</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Pie extends Vue {

    @Prop({type: Number, default: 64})
    private height!: number;

    @Prop({type: Number, default: null})
    private width!: number;

    @Prop({type: Array, default: () => []})
    private data!: any[];

    @Prop({type: Boolean, default: false})
    private hasLegend!: boolean;

    @Prop({type: Boolean, default: false})
    private hasLabel!: boolean;

    @Prop({type: Boolean, default: false})
    private hasTooltip!: boolean;

    @Prop({type: Number, default: null})
    private percent!: number;

    @Prop({type: String, default: null})
    private color!: string;

    @Prop({type: Array, default: () => [10, 20]})
    private radius!: any[];

    @Prop({type: String, default: null})
    private title!: string;

    @Prop({type: String, default: null})
    private subtitle!: string;

    @Prop({type: Boolean, default: false})
    private showTitle!: boolean;

    get chartHeight() {
      return `${this.height}px`;
    }

    get chartWidth() {
      if (this.width == null) {
        return 'auto';
      }
      return `${this.width}px`;
    }

    get isPercent(): boolean {
      return this.percent != null;
    }

    private labelConfig: any[] = ['percent', {
        formatter: (val: any, item: any) => {
          return item.point.item + ': ' + val;
        },
    }];

    get extendSettings() {
      const setting: any = {};
      if (this.showTitle) {

        setting.title = {
          text: this.title,
          subtext: this.subtitle, // '纯属虚构',
          x: 'center',
          y: 'center',
        };

      }
      return setting;
    }

    get chartSettings() {
      const chartColor = this.color;
      const setting: any = {
        label: {
          show: !this.isPercent,
        },
      };

      if (this.isPercent) {
        setting.radius = this.radius;
        setting.offsetY = this.height / 2;
        setting.itemStyle = {
          color(params: any) {
            return params.data.name === '占比' ? chartColor || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
          },
        };
      }

      // 放大效果
      setting.hoverAnimation = false;

      return setting;
    }

    get pieData(): any {
      let source: any[] = this.data;
      if (this.isPercent) {
        source = [
          {
            item: '占比',
            count: this.percent,
          },
          {
            item: '反比',
            count: 100 - this.percent,
          },
        ];
      }
      return {
          columns: ['item', 'count'],
          rows: source,
      };
    }

    private pieStyle: any = {
        stroke: '#fff',
        lineWidth: 1,
      };

    get pieColor() {
      if ( !this.isPercent ) {
        return ['item'];
      }
      return ['item', (v: any) => {
        return v === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
      }];
    }

}
</script>
