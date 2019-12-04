import {
  namespace,
} from 'vuex-class';

export const appModule = namespace('app');
export const aclModule = namespace('acl');
export const userModule = namespace('user');


export * from './modules/acl';