<template>
  <div>
   <div class="g2-pie__chart">
      <div #container></div>
      <!--
      <div *ngIf="subTitle || total" class="g2-pie__total">
        <h4 *ngIf="subTitle" class="g2-pie__total-title" [innerHTML]="subTitle"></h4>
        <div *ngIf="total" class="g2-pie__total-stat" [innerHTML]="total"></div>
      </div>
      -->
    </div>
    <!--
    <ul *ngIf="hasLegend && legendData?.length" class="g2-pie__legend">
      <li *ngFor="let item of legendData; let index = index" (click)="_click(index)" class="g2-pie__legend-item">
        <span class="g2-pie__legend-dot" [ngStyle]="{'background-color': !item.checked ? '#aaa' : item.color}"></span>
        <span class="g2-pie__legend-title">{{item.x}}</span>
        <nz-divider nzType="vertical"></nz-divider>
        <span class="g2-pie__legend-percent">{{item.percent}}%</span>
        <span class="g2-pie__legend-value" [innerHTML]="valueFormat ? valueFormat(item.y) : item.y"></span>
      </li>
    </ul>
    -->
  </div>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const G2 = require('@antv/g2');
const DataSet = require('@antv/data-set');

@Component({
  components: {
  },
})
export default class G2Pie extends Vue {

  private scroll$: any = null;
  private node: any;
  private el: any;

  // private chart:any;
  // private chart: any;
}

/*
@Component({
  components: {
  },
})
export default class G2Pie extends Vue {

     private scroll$: any = null;

    private node: any;

    private el:any;

  private chart: any;
  private initFlag:boolean = false;
  private  legendData: any[] = [];

  @Prop({type:Boolean,default:true})
  private animate!:boolean;
  
  @Prop({type:String,default:'rgba(24, 144, 255, 0.85)'})
  private color!:string ;

  @Prop({type:String,default:null})
  private subTitle!: string;
  
  @Prop({type:String,default:null})
  private total!: string;

  @Prop({type:Number,default:0})
  private height!: number;
  
  @Prop({type:Boolean,default:false})
  private hasLegend!: boolean;

  @Prop({type:Boolean,default:false})
  private legendBlock!: boolean;
  
  @Prop({type:Number,default:0.75})
  private inner!:number;

  @Prop({type:Array,default:()=>[12, 0, 12, 0]})
  private padding!: number[];

  @Prop({type:Number,default:null})
  private percent!:number;
  
  @Prop({type:Boolean,default:true})
  private tooltip!: boolean;

  @Prop({type:Number,default:0})
  private lineWidth!:number;

  @Prop({type:Boolean,default:true})
  private select!: boolean;

  @Prop({type:Array,default:()=>[]})
  private data!: Array<{ x: number | string; y: number; [key: string]: any }>;

  @Prop({type:Function,default:null})
  private valueFormat!: Function;

  @Prop({type:Array,default:()=>[]})
  private colors!: any[];

  constructor() {
    super();
  }

  private setCls() {
    
  }

  private runInstall() {
     setTimeout(() => this.install());
  }

  private install() {
    this.legendBlock = this.el.nativeElement.clientWidth <= 380;
    this.setCls();

    let formatColor;
    const isPercent = typeof this.percent !== 'undefined';
    if (isPercent) {
      this.select = false;
      this.tooltip = false;
      formatColor = (value:any) =>
        value === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';

      this.data = [
        {
          x: '占比',
          y: this.percent,
        },
        {
          x: '反比',
          y: 100 - this.percent,
        },
      ];
    }

    if (!this.data || (this.data && this.data.length < 1)) return;

    if (this.chart) this.chart.destroy();
    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: this.height,
      padding: this.padding,
      animate: this.animate,
    });

    if (!this.tooltip) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        showTitle: false,
        itemTpl:
          '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
      });
    }

    chart.axis(false);
    chart.legend(false);

    const dv = new DataSet.DataView();
    dv.source(this.data).transform({
      type: 'percent',
      field: 'y',
      dimension: 'x',
      as: 'percent',
    });
    chart.source(dv, {
      x: {
        type: 'cat',
        range: [0, 1],
      },
      y: {
        min: 0,
      },
    });

    chart.coord('theta', { innerRadius: this.inner });

    chart
      .intervalStack()
      .position('y')
      .style({ lineWidth: this.lineWidth, stroke: '#fff' })
      .tooltip('x*percent', (item:any, percent:any) => {
        return {
          name: item,
          value: this.hasLegend ? percent : (percent * 100).toFixed(2),
        };
      })
      .color('x', isPercent ? formatColor : this.colors)
      .select(this.select);

    chart.render();

    this.chart = chart;
    if (this.hasLegend) {

    }
  }

  private installResizeEvent() {
    if (this.scroll$ || !this.hasLegend) return;

  }

  private _click(i: number) {
    this.legendData[i].checked = !this.legendData[i].checked;

    if (this.chart) {
      this.chart.filter('x', (val: any, item: any) => item.checked);
      this.chart.repaint();
    }
  }

  private mounted(): void {
    this.initFlag = true;
    this.runInstall();
  }

  private updated(): void {
    this.installResizeEvent();
    if (this.initFlag) this.runInstall();
  }

  private destroyed(): void {
    if (this.scroll$) this.scroll$.unsubscribe();
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}
*/
</script>
