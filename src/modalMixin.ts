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
  modalSubject$: BehaviorSubject<any>;
  show(): void;
  handleOk(): void;
  handleCancel(): void;
}

@Component({})
export default class ModalMixin extends Vue implements IModalMixin {

  public visible: boolean = false;

  public modalSubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  public handleOk(): void {
    this.visible = false;
    this.modalSubject$.next({
        isCancel: true,
    });
  }

  public handleCancel(): void {
    this.visible = false;
    this.modalSubject$.next({
        isCancel: false,
    });
  }

  public show() {
    this.visible = true;
  }

  private mounted(): void {
    this.visible = true;
  }
}
