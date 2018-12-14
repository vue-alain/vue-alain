
/**
 * 集中导入app 依赖的模块和功能
 */
import 'rxjs/Rx';

import './antdv';
import './infrastructure';
import './component';

import {i18n as language} from './language';

import './storage';

// mock
import '@/_mock/index';


// 主题
import '@/assets/theme/styles/index.less';


export const i18n = language;

