import { CreateElement, VNode } from 'vue';
import { AntdVueComponent } from './component';

type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
/** ANotification Layout Component */
export declare class ANotification extends AntdVueComponent {
  btn: (h: CreateElement) => any | VNode

  class: string

  description: (h: CreateElement) => any | VNode | string

  duration: number

  icon: (h: CreateElement) => any | VNode

  key: string

  message: (h: CreateElement) => any | VNode | string

  placement: Placement

  style: object | string

  onClose: Function

  config: (params: Config) => void
}

interface Config {
  bottom: string

  duration: number

  getContainer: () => HTMLElement

  placement: Placement

  top: string
}
