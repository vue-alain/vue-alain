import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import {
  Component,
  Prop,
  Vue,
  Emit,
  Model,
  Watch,
} from 'vue-property-decorator';

export interface IModalMixin {
  visible: boolean;
  subject$: BehaviorSubject<any>;
  show(): void;
  close(): void;
  handleOk(): void;
  handleCancel(): void;
}

@Component({})
export default class ModalMixin extends Vue implements IModalMixin {

  public visible: boolean = false;

  @Prop({
    type: Object,
    default() {
      return new BehaviorSubject<any>({});
    },
  })
  public subject$!: BehaviorSubject<any>;

  public handleOk(): void {
    this.visible = false;
    this.subject$.next({});
  }

  public handleCancel(): void {
    this.visible = false;
    this.subject$.error({
      isCancel: true,
    });
  }

  public show() {
    this.visible = true;
  }

  public close() {
    this.visible = false;
  }

  private mounted(): void {
    this.visible = true;
  }
}
