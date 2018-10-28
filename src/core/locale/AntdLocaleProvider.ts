import { ILocalsProvider } from './ILocalsProvider';

export class AntdLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        // import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
        const antdLang = import(`ant-design-vue/lib/locale-provider/${lang}`);
        return antdLang;
    }

}
