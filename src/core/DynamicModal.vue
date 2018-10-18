<template>
<a-modal title="测试窗口222" destroyOnClose :visible="visible" @ok="handleOk" @cancel="handleCancel">
    <component :is="component" :param="props" v-bind="props"></component>
</a-modal>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
    Model,
    Watch,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

@Component({
    components: {},
})
export default class DynamicModal extends Vue {

    @Prop({
        type:Function,
        default(){
            return (param: any) => {};
        },
    })
    private callback!: (param: any)=>void;

    @Prop({
        type:Function,
        default: null,
    })
    private component!: any;

    @Prop({
        type:Object,
        default(){
            return {};
        },
    })
    private props!: any;

    private visible: boolean = false;

    private mounted(): void {
        this.visible  = true;
        console.log(this.props);
    }

    private handleOk(){
        this.visible = false;
        this.callback(true);
    }

    private handleCancel(){
        this.visible = false;
        this.callback(false);
    }


}
</script>
