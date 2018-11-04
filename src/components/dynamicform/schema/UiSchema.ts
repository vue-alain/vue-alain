import { ErrorSchema } from './ErrorSchema';

export interface DFGridSizeSchema {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
}

export interface DFGridSchema {
    itemattrs?: any;
    widgetattrs?: any;
}

export interface DFRenderSchema {
    /**
     * 小部件名称
     */
    widget?: string;

    /**
     * 元素组件大小
     */
    size?: 'default' | 'large' | 'small';

    /**
     * <form-item>属性
     */
    itemattrs?: any;

    /**
     * 组件属性
     */
    widgetattrs?: any;

}

export interface DFDataSchema {
/**
 * 异步静态数据源
 * - `input` 可能根据不同部件的情况存在值，例如：`autocomplete` 表示当前键入的值
 * - 参数、返回值：可能根据不同部件需求而定，具体参阅相应小部件独立说明
 */
    asyncData?: (input?: any) => Promise<any[]>;
}

/** 指定如何渲染 `Schema` */
export interface DFUISchemaItem
extends DFRenderSchema,
    DFDataSchema,
    ErrorSchema {
    [key: string]: any;

    /** 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用 */
    debug?: boolean;

    /**
     * 是否隐藏
     */
    hidden?: boolean;

}

/**
 * UI Schema，KEY名**务必**是 `$` 开头（例如：`$name`、`$id`），以便能区分KEY值还是UI选项
 * - 结构层级应同 `SFSchema` 一致
 * - 当KEY为 `*` 时表示对所有子表单元素都有效
 */
export interface DFUISchema {
[key: string]: DFUISchemaItem;
}
