<template>
<a-layout class="antd-form-editor">
    <a-layout-sider>
        <editor-widget></editor-widget>
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="height:48px"></a-layout-header>
        <a-layout-content>Content</a-layout-content>
    </a-layout>
    <a-layout-sider>
        <editor-property></editor-property>
    </a-layout-sider>
</a-layout>

</template>

<style lang="less">
.antd-form-editor{
    height:100%;

    .ant-layout-sider{
        width:200px;
        background-color:#d3d3d3;
    }

    .ant-layout-header{
        background-color:#d3d3d3;
    }
}
</style>

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


import EditorWidget from './EditorWidget.vue';
import EditorProperty from './EditorProperty.vue';



@Component({
    components: {
        EditorWidget,
        EditorProperty,
    },
})
export default class AntdFormEditor extends Vue {

}
</script>
