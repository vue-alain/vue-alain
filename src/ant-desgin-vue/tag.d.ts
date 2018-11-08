import { AntdVueComponent } from './component';

/** ATag Layout Component */
export declare class ATag extends AntdVueComponent {
  afterClose: () => void

  closable: boolean

  color: string

  close: (e: Event) => void
}

/** ACheckableTag Layout Component */
export declare class ACheckableTag extends AntdVueComponent {
  checked: boolean

  change: (checked: boolean) => void
}
