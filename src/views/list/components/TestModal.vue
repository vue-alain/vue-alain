<template>
<a-modal title="测试窗口" destroyOnClose :visible="visible"
@ok="handleOk" @cancel="handleCancel">
    <span>
        {{visible}}
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
    Mixins,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import ModalMixin,{ IModalMixin } from '@/modalMixin.ts';

@Component({
    components: {},
})
export default class TestModal extends Mixins<IModalMixin>(ModalMixin){

    @Prop({
        type: String,
        default: '',
    })
    private user!: string;

    constructor(){
        super();
    }
    private mounted(): void {
        console.log(this.visible);
        console.log(`TestModal  mounted`);
        console.log(this.user);
    }
}
</script>
