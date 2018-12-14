/**
 * 弹出框混入功能
 */
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
  /**
   * 弹出框是否显示
   */
  visible: boolean;
  /**
   * 弹出框监听者
   */
  subject$: BehaviorSubject<any>;
  /**
   * 显示弹出框
   */
  show(): void;
  /**
   * 关闭弹出框
   */
  close(): void;
  /**
   * 确定按钮处理
   */
  handleOk(): void;
  /**
   * 取消按钮处理
   */
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
