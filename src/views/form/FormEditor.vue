<template>
<div>
    <av-page-header title="表单设计器">
        <div slot="content">
            设计动态表单
        </div>
    </av-page-header>
    <a-card title="表单设计器"
        :bodyStyle="{
            height:'768px'
        }">
        <antd-form-editor></antd-form-editor>
    </a-card>
</div>


</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import AntdFormEditor from '@/components/antdformeditor/AntdFormEditor.vue';

@Component({
    components: {
        AntdFormEditor,
    },
})
export default class FormEditor extends Vue {

}
</script>