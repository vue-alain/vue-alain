import { AntdVueComponent } from './component';

/** ACollapse Layout Component */
export declare class ACollapse extends AntdVueComponent {
  activeKey: string[] | string

  defaultActiveKey: string

  change: (key: string) => void
}

/** ACollapsePanel Layout Component */
export declare class ACollapsePanel extends AntdVueComponent {
  disabled: boolean

  header: string

  key: string
}
