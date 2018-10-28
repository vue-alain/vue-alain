import { ILocalsProvider } from './ILocalsProvider';

class TsLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        const result = import(/* webpackChunkName: "lang-[request]" */  `@/locales/${lang}`);
        return result;
    }

}
