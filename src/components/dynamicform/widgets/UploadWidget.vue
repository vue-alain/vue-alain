<template>
<df-item :formitem="formitem">
  <a-upload :name='formitem.key' action='/upload.do'>
    <a-button>
      <a-icon type='upload' /> 上传文件
    </a-button>
  </a-upload>
</df-item>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import { DFSchema } from './../schema/DfSchema';

import DyFormitemWapper from './../DyFormitemWapper.vue';

import DyFormMixin, { IDyFormMixin } from '@/components/dynamicform/dyformitemMixin';

@Component({
    components: {
      'df-item': DyFormitemWapper,
    },
})
export default class UploadWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>