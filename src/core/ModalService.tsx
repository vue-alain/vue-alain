import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

import DynamicModal from './DynamicModal.vue';

export interface ModalOption {
    title?: string;
    callback?: (param: any) => void;
}

class ModalService{

    public show(component: any, opt?: ModalOption|null, props?: any) {
        const defaultOpt: ModalOption = {
            callback: () => { },
            ...opt,
        };
        const params: any = {
            ...props,
        };

        const ComponentClass = Vue.extend(component);
        
        const instance = new ComponentClass({
            propsData: { callback: defaultOpt.callback, param: params },
        });
        instance.$mount();
    }

    public show2(component: any, props?: any) {
        // const comp = this.modal(component);
        //console.log(comp);
        
        const ComponentClass = Vue.extend(DynamicModal);
        
        const instance = new ComponentClass({
            propsData: {
                'component': component,
                'props': props,
            },
        });
        instance.$mount();
    }

}

const service = new ModalService();

export default service;
