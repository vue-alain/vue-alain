import { AntdVueComponent } from './component';

/** ASlider Layout Component */
export declare class ASlider extends AntdVueComponent {
  autoFocus: boolean

  defaultValue: number | number[]

  disabled: boolean

  dots: boolean

  included: boolean

  marks: object

  max: number

  min: number

  range: boolean

  step: number | null

  tipFormatter: Function | null

  value: number | number[]

  vertical: boolean

  afterChange(value: number): void

  change(value: number): void

  blur(): void

  focus(): void
}
