import {
    Vue,
} from 'vue-property-decorator';


import axios from 'axios';
import * as _ from 'lodash';

interface ILocalsProvider {
    getMesage(lang: any): Promise<any>;
}

class AntdLocaleProvider implements ILocalsProvider {

    getMesage(lang: any): Promise<any>{
        // import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
        const antdLang = import(`ant-design-vue/lib/locale-provider/${lang}`);
        return antdLang;
    }

}

class JsonLocaleProvider implements ILocalsProvider{

    getMesage(lang: any): Promise<any>{
        const jsonLang = axios.get(`/assets/locales/${lang}.json`);
        return jsonLang;
    }

}

class TsLocaleProvider implements ILocalsProvider{

    getMesage(lang: any): Promise<any>{
        const result = import(/* webpackChunkName: "lang-[request]" */  `@/locales/${lang}`);
        return result;
    }

}

class LocaleService {
    private _i18n: any = null;
    private loadedLanguages: string[] = [];

    private providers: any[] = [];

    public init(i18n: any, defaultLang: string){
        this._i18n = i18n;
        this.loadedLanguages.push(defaultLang);
    }

    public addProvider(provider:any){
        this.providers.push(provider);
    }

    private getLocales(lang: any){
        const localeProviders:Promise<any>[] = [];
        this.providers.forEach(item=>{
                const provider = new item() as ILocalsProvider;
                localeProviders.push(provider.getMesage(lang))
            });
        return localeProviders;
    }

    public loadLanguageAsync(lang: any) {
        const i18n = this._i18n;
        if (i18n.locale !== lang) {
            if (!this.loadedLanguages.includes(lang)) {
                const langs = this.getLocales(lang);
                return Promise.all(langs)
                        .then((msgs: any[])=>{
                            let langMsg={};
                            msgs.map(item=>{
                                if(item.data!=null){
                                    console.log(item.data);
                                    _.assignIn(langMsg,item.data);    
                                }else{
                                    _.assignIn(langMsg,item);
                                }    
                            });

                            i18n.setLocaleMessage(langMsg);
                            this.loadedLanguages.push(lang);
                            return this.setI18nLanguage(lang);
                        });
            }
            return Promise.resolve(this.setI18nLanguage(lang));
        }
        return Promise.resolve(lang);
    }

    private setI18nLanguage(lang: any) {
        this._i18n.locale = lang;
        // axios.defaults.headers.common['Accept-Language'] = lang;
        // document.querySelector('html').setAttribute('lang', lang);
        return lang;
    }

}

const localeService = new LocaleService();
localeService.addProvider(AntdLocaleProvider);
localeService.addProvider(JsonLocaleProvider);

export default localeService;
