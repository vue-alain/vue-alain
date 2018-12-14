/**
 * 对话框服务，主要提供异步打开对话框的功能
 */
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

import { VueConstructor } from 'Vue';

import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError  } from 'rxjs/operators';

class ModalService {

    /**
     * 打开对话框
     * @param component 对话框组件
     * @param props 对话框props
     */
    public show(component: VueConstructor<Vue>| Promise<any>  , props?: any): Observable<any> {

        const modalsubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
        const comp = component as VueConstructor<Vue>;
        if (comp != null) {

            const ComponentClass = Vue.extend(comp);

            const instance = new ComponentClass({
                propsData: {
                    props,
                    subject$: modalsubject$,
                    ...props,
                },
            });
            instance.$mount();
        }
        return this.handlesubject(modalsubject$);
    }

    /**
     * 异步打开对话框
     * @param component 对话框组件
     * @param props 对话框props
     */
    public showAsync(component: Promise<any>,  props?: any): Observable<any> {
        const modalsubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
        component.then((comp: any) => {
            const modalInstance = new comp.default({
                    propsData: {
                        props,
                        subject$: modalsubject$,
                        ...props,
                    },
                },
            );
            modalInstance.$mount();
        });
        return this.handlesubject(modalsubject$);
    }

    private handlesubject(modalsubject$: BehaviorSubject<any>): Observable<any> {
        return modalsubject$.asObservable()
        .pipe(catchError((err: any) => of(err)));
    }
}

const service = new ModalService();

export default service;
