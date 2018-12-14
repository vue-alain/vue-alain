import { ILocalsProvider } from './ILocalsProvider';

/**
 * 本地ts国际化语言提供者，未使用
 */
class TsLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        const result = import(/* webpackChunkName: "lang-[request]" */  `@/locales/${lang}`);
        return result;
    }

}
