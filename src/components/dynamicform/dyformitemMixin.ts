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

@Component({})
export default class DyFormMixin extends Vue implements IDyFormMixin {

    @Prop({type: Object, default: () => {}})
    public formitem!: FormProperty;

    get widgetAttrs() {
        return this.formitem.widgetAttrs;
    }

    get itemAttrs() {
        return this.formitem.formitemAttrs;
    }

    get label(): string {
        return this.formitem.label;
    }

}
