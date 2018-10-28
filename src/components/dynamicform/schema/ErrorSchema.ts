export interface ErrorData {
  keyword: string;
  dataPath?: string;
  schemaPath?: string;
  params?: { [key: string]: any };
  message?: string;
  _custom?: boolean;
}

export interface ErrorSchema {

  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  liveValidate?: boolean;

  /**
   * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
   */
  errors?: { [ key: string ]: string | ((obj: ErrorData) => string) };

  /**
   * 是否立即呈现错误视觉，默认：`false`
   */
  firstVisual?: boolean;

  /**
   * 是否只展示错误视觉不显示错误文本，默认：`false`
   */
  onlyVisual?: boolean;

  /**
   * 是否忽略某些数据类型校验 `ERRORSDEFAULT`
   * - 值始终包含 `DelonSchemaFormConfig.ingoreKeywords`
   */
  ingoreKeywords?: string[];

  /**
   * 自定义校验
   */
  validator?: (value: any) => ErrorData[];
}
