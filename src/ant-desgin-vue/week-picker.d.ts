import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';
import { ADatePicker } from './date-picker';

/** AWeekPicker Layout Component */
export declare class AWeekPicker extends ADatePicker {
  defaultValue: any

  format: string

  value: any

  change(date: any, dateString: string): void
}

