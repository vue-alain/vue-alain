import axios from 'axios';
import { ILocalsProvider } from './ILocalsProvider';

export class JsonLocaleProvider implements ILocalsProvider {

    public getMesage(lang: any): Promise<any> {
        const jsonLang = axios.get(`/assets/locales/${lang}.json`);
        return jsonLang;
    }

}
