<template>
  <av-result
        type="success"
        title="操作成功"
        description="预计两小时内到账"
        class="result"
  >
    <template slot="extra">
      <div className={styles.information}>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            付款账户：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{data.payAccount}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            收款账户：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{data.receiverAccount}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            收款人姓名：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{data.receiverName}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            转账金额：
          </a-col>
          <a-col :xs="24" :sm="16">
            <span class="money">{{data.amount}}</span> 元
          </a-col>
        </a-row>
      </div>
    </template>
    <template slot="actions">
      <a-button type="primary" @click="onFinish">
          再转一笔
        </a-button>
        <a-button>查看账单</a-button>
    </template>
  </av-result>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({})
export default class StepForm3 extends Vue {

  @Prop({ type: Object, default: () => {} })
  private value!: any;

  private data: any = {};

  constructor() {
    super();
  }

  private onFinish() {
    this.data.step = 0;
  }

  private mounted(): void {
    this.data = this.value;
  }

}
</script>
