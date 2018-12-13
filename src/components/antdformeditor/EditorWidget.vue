<template>
<a-collapse defaultActiveKey="1" :bordered="true">
    <a-collapse-panel header="基础组件" key="1">
        <a-row :gutter=8>
            <a-col :span="12">
                <a-button size="small" type="dashed" block>单行文本</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>多行文本</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>计数器</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>单选框</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>多选框</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>时间选择</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>日期选择</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>评分</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>滑块</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>下拉</a-button>
            </a-col>
        </a-row>
    </a-collapse-panel>
    <a-collapse-panel header="高级组件" key="2">
        <a-row :gutter=8>
            <a-col :span="12">
                <a-button size="small" type="dashed" block>自定义1</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>文件上传</a-button>
            </a-col>
        </a-row>
    </a-collapse-panel>
    <a-collapse-panel header="布局字段" key="3">
        <a-row :gutter=8>
            <a-col :span="12">
                <a-button size="small" type="dashed" block>栅格布局</a-button>
            </a-col>
        </a-row>
    </a-collapse-panel>
</a-collapse>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({
    components: {
    },
})
export default class EditorWidget extends  Vue {

}
</script>