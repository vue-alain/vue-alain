import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

import { Observable } from 'rxjs';
import { IModalMixin } from '@/modalMixin.ts';
class ModalService {

    public show(component: any, props?: any): Observable<any> {

        const ComponentClass = Vue.extend(component);

        const instance = new ComponentClass({
            propsData: {
                'props': props,
                ...props,
            },
        });
        instance.$mount();

        return  (instance as IModalMixin).modalSubject$;
    }
}

const service = new ModalService();

export default service;
