import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';
import { ADatePicker } from './date-picker';

/** ARangePicker Layout Component */
export declare class ARangePicker extends ADatePicker {
  defaultValue: any

  // disabledTime: (dates: any[], partial: 'start' | 'end') => any

  format: string

  ranges: () => object | { [range: string]: object[] }

  renderExtraFooter: VNode

  showTime: object | boolean

  value: any

  calendarChange(dates: object[], dateStrings: [string, string]): void

  change(date: any, dateString: string): void

  ok(): void
}

