import axios from 'axios';
import { ILocalsProvider } from './ILocalsProvider';

/**
 * json 文件国际化信息提供者
 */
export class JsonLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        const jsonLang = axios.get(`/assets/locales/${lang}.json`);
        return jsonLang;
    }

}
