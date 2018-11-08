import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';

interface DisplayRender { labels: string, selectedOptions: any }

type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
/** ACascader Layout Component */
export declare class ACascader extends AntdVueComponent {
  allowClear: boolean

  autoFocus: boolean

  changeOnSelect: boolean

  defaultValue: string[]

  disabled: boolean

  displayRender: (Options: DisplayRender) => VNode

  expandTrigger: 'click' | 'hover'

  getPopupContainer(triggerNode: VNode): HTMLElement

  loadData(selectedOptions: any): void

  notFoundContent: string

  options: object

  placeholder: string

  popupClassName: string

  popupStyle: object

  popupPlacement: Placement

  popupVisible: boolean

  showSearch: boolean

  size: AntdVueComponentSize

  value: string[]

  blur(): void

  focus(): void
}
