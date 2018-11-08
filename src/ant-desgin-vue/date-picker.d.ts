import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';

/** ADatePublic Layout Component */
export declare class ADatePublic extends AntdVueComponent {
  allowClear: boolean

  autoFocus: boolean

  dateRender: VNode

  disabled: boolean

  disabledDate: (currentDate: object) => boolean

  getCalendarContainer: (trigger: Event) => void

  locale: object

  open: boolean

  placeholder: string

  popupStyle: object

  dropdownClassName: string

  size: AntdVueComponentSize

  blur(): void

  focus(): void

  openChange(status: any): void
}


/** ADatePicker Layout Component */
export declare class ADatePicker extends AntdVueComponent {
  defaultValue: any

  disabledTime(date: any): void

  format: string

  renderExtraFooter: VNode

  showTime: Object | boolean

  showToday: boolean

  value: any

  change(date: any, dateString: string): void

  ok(): void
}

