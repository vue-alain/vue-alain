import { ILocalsProvider } from './ILocalsProvider';

/**
 * antd 国际化相信提供者
 */
export class AntdLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        const antdLang = import(`ant-design-vue/lib/locale-provider/${lang}`);
        return antdLang;
    }

}
