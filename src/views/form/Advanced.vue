<template>
  <div>
    <av-page-header title="高级表单">
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >表单页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>高级表单</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="content">
        高级表单常见于一次性输入和提交大批量数据的场景。
      </div>
    </av-page-header>
  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({
    components: {
    },
})
export default class AdvancedForm extends Vue {

    constructor() {
        super();
    }
}
</script>