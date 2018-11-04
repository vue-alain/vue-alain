import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import {
    Component,
    Prop,
    Vue,
    Emit,
    Model,
    Watch,
} from 'vue-property-decorator';

import { DFSchema } from './schema/DfSchema';
import FormProperty from './domain/FormProperty';

export interface IDyFormMixin {
    formitem?: FormProperty;
}

/**
 * 动态表单项组件的混入
 */
@Component({})
export default class DyFormMixin extends Vue implements IDyFormMixin {

    /**
     * 表单属性
     */
    @Prop({type: Object, default: () => {}})
    public formitem!: FormProperty;

    /**
     * 组件属性
     */
    get widgetAttrs() {
        return this.formitem.widgetAttrs;
    }

    /**
     * form-item 属性
     */
    get itemAttrs() {
        return this.formitem.formitemAttrs;
    }

    /**
     * 标签
     */
    get label(): string {
        return this.formitem.label;
    }

}
