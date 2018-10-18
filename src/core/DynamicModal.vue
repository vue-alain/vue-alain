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

import { Observable, Subscription, BehaviorSubject } from 'rxjs';

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

    public modalSubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    //private _change$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);

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

    private desctory(){
        this.modalSubject$.unsubscribe();
    }

    private handleOk(){
        this.visible = false;
        this.modalSubject$.next({
            isCancel: true
        });
        //this.callback(true);
    }

    private handleCancel(){
        this.visible = false;
        this.modalSubject$.next({
            isCancel: false
        });
    }


}
</script>
