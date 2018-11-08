import { AntdVueComponent } from './component';

/** ACalendar Layout Component */
export declare class ACalendar extends AntdVueComponent {
  dateCellRender(date: object): any

  dateFullCellRender(date: object): any

  defaultValue: object

  disabledDate: (currentDate: object) => boolean

  fullscreen: boolean

  locale: object

  mode: string

  monthCellRender(date: object): any

  monthFullCellRender(date: object): any

  validRange: [object, object]

  value: object

  panelChange(date: object, mode: string): void

  select(date: object): void

  change(date: object): void
}
