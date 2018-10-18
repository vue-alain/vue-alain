<template>
<a-modal title="测试窗口" destroyOnClose :visible="visible" @ok="handleOk" @cancel="handleCancel">
    <span>
        {{this.param.user}}
    </span>
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
export default class TestModal extends Vue {

    @Prop({
        type: Function,
        default() {
            return (param: any) => {};
        },
    })
    private callback!: (param: any) => void;

    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private param!: any;

    @Prop({
        type: String,
        default: '',
    })
    private user!: any;

    private visible: boolean = false;

    private mounted(): void {
        this.visible  = true;
    }

    private handleOk() {
        this.visible = false;
        this.callback(true);
    }

    private handleCancel() {
        this.visible = false;
        this.callback(false);
    }


}
</script>
