import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

import { VueConstructor } from 'Vue';

import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError  } from 'rxjs/operators';
import { IModalMixin } from '@/modalMixin.ts';
class ModalService {

    public show(component: VueConstructor<Vue>| Promise<any>  , props?: any): Observable<any> {

        const modalsubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
        const comp = component as VueConstructor<Vue>;
        if (comp != null) {

            const ComponentClass = Vue.extend(comp);

            const instance = new ComponentClass({
                propsData: {
                    'props': props,
                    subject$: modalsubject$,
                    ...props,
                },
            });
            instance.$mount();
        }
        return this.handlersubject(modalsubject$);
    }

    public showAsync(component: Promise<any>,  props?: any): Observable<any> {
        const modalsubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
        component.then((comp: any) => {
            const modalInstance = new comp.default({
                    propsData: {
                        'props': props,
                        subject$: modalsubject$,
                        ...props,
                    },
                },
            );
            modalInstance.$mount();
        });
        return this.handlersubject(modalsubject$)
    }

    private handlersubject(modalsubject$: BehaviorSubject<any>): Observable<any> {
        return modalsubject$.asObservable()
        .pipe(catchError((err: any) => of(err)));
    }
}

const service = new ModalService();

export default service;
