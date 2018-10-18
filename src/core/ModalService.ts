import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

import { VueConstructor } from 'Vue';

import { Observable, BehaviorSubject } from 'rxjs';
import { IModalMixin } from '@/modalMixin.ts';
class ModalService {

    public show(component: VueConstructor<Vue>|string, props?: any): Observable<any> {

        const comp = component as VueConstructor<Vue>;
        if (comp != null) {

            const ComponentClass = Vue.extend(comp);

            const instance = new ComponentClass({
                propsData: {
                    'props': props,
                    ...props,
                },
            });
            instance.$mount();

            return  (instance as IModalMixin).modalSubject$;

        }
        // if((typeof compoent) === VueConstructor<Vue>)

        return new BehaviorSubject<any>({});
    }
}

const service = new ModalService();

export default service;
