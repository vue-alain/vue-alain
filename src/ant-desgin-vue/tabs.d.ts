import { VNode } from 'vue';
import { AntdVueComponent, AntdVueComponentSize } from './component';


type position = 'top' | 'right' | 'bottom' | 'left';

type Type = 'line' | 'card' | 'editable-card';
/** ATabs Layout Component */
export declare class ATabs extends AntdVueComponent {
  activeKey: string

  animated: boolean | {inkBar:boolean, tabPane:boolean}

  defaultActiveKey: string

  hideAdd: boolean

  size: AntdVueComponentSize

  tabBarExtraContent: VNode

  tabBarStyle: object

  tabPosition: position

  type: Type

  tabBarGutter: number

  change: (activeKey: string) => void

  edit: (targetKey: string, action: string) => void

  nextClick: Function

  prevClick: Function

  tabClick: Function
}

/** ATabPane Layout Component */
export declare class ATabPane extends AntdVueComponent {
  forceRender: boolean

  key: string

  tab: string | VNode
}
