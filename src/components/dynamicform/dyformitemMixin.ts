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

export interface IDyFormMixin {
    formitem?: DFSchema;
}

@Component({})
export default class DyFormMixin extends Vue implements IDyFormMixin {

    @Prop({type: Object, default: () => {}})
    public formitem!: DFSchema;

    get widgetAttrs(){
        const ui: any = this.formitem.ui;
        if(ui==null){
          return {};
        }
        return ui.widgetattrs;
    }

    get itemAttrs(){
        const ui: any = this.formitem.ui;
        if(ui==null){
          return {};
        }
        const result = ui.itemattrs;
        console.log(result);
        return result;
    }

}
