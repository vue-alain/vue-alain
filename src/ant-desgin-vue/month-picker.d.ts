import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';
import { ADatePicker } from './date-picker';


/** AMonthPicker Layout Component */
export declare class AMonthPicker extends ADatePicker {
  defaultValue: any

  format: string

  monthCellContentRender: VNode

  renderExtraFooter: VNode

  value: any

  change(date: any, dateString: string): void
}

