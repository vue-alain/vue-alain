import { VNode } from 'vue';
import { AntdVueComponent } from './component';

/** ARate Layout Component */
export declare class ARate extends AntdVueComponent {
  allowClear: boolean

  allowHalf: boolean

  autoFocus: boolean

  character: string | VNode

  count: number

  defaultValue: number

  disabled: boolean

  value: number

  blur(): void

  change(value: number): void

  focus(): void

  hoverChange(value: number): void

  keydown(e: Event): void
}
