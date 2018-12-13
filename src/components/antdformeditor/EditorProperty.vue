<template>

<a-tabs defaultActiveKey="1" type="card" :tabBarStyle="{height:'48px'}">
    <a-tab-pane tab="字段属性" key="1">

<a-collapse defaultActiveKey="1" :bordered="true">
    <a-collapse-panel header="结构属性" key="1">
        <a-row :gutter=8>
            <a-col :span="12">
                <a-button size="small" type="dashed" block>标题</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>默认值</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>占位内容</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>id</a-button>
            </a-col>
        </a-row>
    </a-collapse-panel>
    <a-collapse-panel header="界面属性" key="2">
        <a-row :gutter=8>
            <a-col :span="12">
                <a-button size="small" type="dashed" block>布局</a-button>
            </a-col>

            <a-col :span="12">
                <a-button size="small" type="dashed" block>文件上传</a-button>
            </a-col>
        </a-row>
    </a-collapse-panel>
</a-collapse>

    </a-tab-pane>
    <a-tab-pane tab="表单属性" key="2">
        <a-row>
            <a-col>
                表单布局:
                <a-radio-group >
                    <a-radio-button value="horizontal">horizontal</a-radio-button>
                    <a-radio-button value="vertical">vertical</a-radio-button>
                    <a-radio-button value="inline">inline</a-radio-button>
                </a-radio-group>
            </a-col>
        </a-row>
        <a-row>
            <a-col>
                隐藏必选标记:
                <a-switch />
            </a-col>
        </a-row>
    </a-tab-pane>
</a-tabs>
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
export default class EditorProperty extends  Vue {

}
</script>