<template>
<div class="cardList">
    <av-page-header title="基础详情页">
        <div slot="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a >首页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a >列表页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>基础详情页</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
    </av-page-header>
    <a-card :bordered="false">
        
          <description-list size="large" title="退款申请" style="margin-bottom: 32px">
            <description term="取货单号">1000000000</description>
            <description term="状态">已取货</description>
            <description term="销售单号">1234123421</description>
            <description term="子订单">3214321432</description>
          </description-list>
          <a-divider style="margin-bottom: 32px" />
          <description-list size="large" title="用户信息" style="margin-bottom: 32px">
            <description term="用户姓名">付小小</description>
            <description term="联系电话">18100000000</description>
            <description term="常用快递">菜鸟仓储</description>
            <description term="取货地址">浙江省杭州市西湖区万塘路18号</description>
            <description term="备注">无</description>
          </description-list><!---->
        <a-divider style="margin-bottom: 32px" />
        <div class="title">退货商品</div>
        <!--:columns="goodsColumns"-->
        <a-table style="margin-bottom: 24px" :pagination="false" :loading="loading" :dataSource="goodsData" rowKey="id"  >
          <a-table-column dataIndex="id" key="id" title="商品编号">
              <template slot-scope="text,record,index" >
                <a href="" v-if="text!='总计'">{{text}}</a>
                <template v-else >
                  <span style="font-weight: 600px">总计</span>
                </template>
              </template>
            </a-table-column>
          <!--
            <a-table-column dataIndex="id" key="id" title="商品编号" :colSpan="id!='总计'?0:4">
              <template slot-scope="text,record,index">
                <a href="" v-if="text!='总计'">{{text}}</a>
                <template v-else >
                  <span style="font-weight: 600px">总计</span>
                </template>
              </template>
            </a-table-column>
            -->
            <a-table-column dataIndex="name" key="name" title="商品名称">
            </a-table-column>
            <a-table-column dataIndex="barcode" key="barcode" title="商品条码">
            </a-table-column>
            <a-table-column dataIndex="price" key="price" title="单价">
            </a-table-column>
            <a-table-column dataIndex="num" key="num" title="数量（件）">
            </a-table-column>
            <a-table-column dataIndex="amount" key="amount" title="金额">
            </a-table-column>
            
            <!--
          columns={goodsColumns}
            <a-table-column
                  dataIndex="title"
                  key="title"
                  title="规则名称"
                >
                </a-table-column>
                -->
        </a-table>
        <div class="title">退货进度</div>
        <a-table style="margin-bottom: 16px" :pagination="false" :loading="loading" :dataSource="basicProgress">
            <!-- columns={progressColumns}-->
            <a-table-column dataIndex="time" key="time" title="时间">
            </a-table-column>
            <a-table-column dataIndex="rate" key="rate" title="当前进度">
            </a-table-column>
            <a-table-column dataIndex="status" key="status" title="状态">

                <template slot-scope="text,record">
                    <a-badge v-if="text==='success'" status="success" text="成功" />
                    <a-badge v-else status="processing" text="进行中" />
                    <!--
                    <a @click="handleUpdateModalVisible(true, record)">配置</a>
                    <a-divider type="vertical" />
                    <a href="">订阅警报</a>
                    -->
                </template>
            </a-table-column>
            <a-table-column dataIndex="operator" key="operator" title="操作员ID">
            </a-table-column>
            <a-table-column dataIndex="cost" key="cost" title="耗时">
            </a-table-column>
        </a-table>
    </a-card>

</div>
</template>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import DescriptionList from '@/components/descriptionlist/DescriptionList.vue';
import Description from '@/components/descriptionlist/Description.vue';

import moment from 'moment';
import axios from 'axios';

@Component({
    components: {
      DescriptionList,
      Description,
    },
})
export default class BasicDetail extends Vue {

    private loading: boolean = false;

    private basicProgress: any[] = [];

    private goodsData: any[] = [];

    private goodsColumns = [
      {
        title: '商品编号',
        dataIndex: 'id',
        key: 'id',
        customRender: (text: any, row: any, index: any/**/) => {
          // return <a></a>;
          // return <a href=""></a>;
          // return <a href=""></a>;
          /*
          if ( text !== '总计') {
            return <a href="">{text}</a>;
          }
          /*
          if (index < basicGoods.length) {
            return <a href="">{text}</a>;
          }
          return {
            children: <span style={{ fontWeight: 600 }}>总计</span>,
            props: {
              colSpan: 4,
            },
          };
          */
        },
      },
    ];

    private mounted(): void {
        axios.get('/api/profile/basic').then((res: any) => {
            const data = res.data;
            this.basicProgress = data.basicProgress;
            this.goodsData = data.basicGoods;
            // console.log(this.goodsData);

            if (data.basicGoods.length) {
              let num = 0;
              let amount = 0;
              data.basicGoods.forEach((item: any) => {
                num += Number(item.num);
                amount += Number(item.amount);
              });
              this.goodsData = data.basicGoods.concat({
                id: '总计',
                num,
                amount,
              });
            }
        });
    }

    get tsxDemo() {
      return {
        render: () => <div>dddd</div>
      };
    }

}
</script>

<style lang="less">
@import '../../assets/theme/styles/index.less';

.title {
    color: @heading-color;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
}
</style>
