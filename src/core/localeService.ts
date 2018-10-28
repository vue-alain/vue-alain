import {
    Vue,
} from 'vue-property-decorator';


import * as _ from 'lodash';

import { ILocalsProvider } from './locale/ILocalsProvider';
import { JsonLocaleProvider } from './locale/JsonLocaleProvider';
import { AntdLocaleProvider } from './locale/AntdLocaleProvider';

class LocaleService {
    // tslint:disable-next-line:variable-name
    private _i18n: any = null;
    private loadedLanguages: string[] = [];

    private providers: any[] = [];

    public init(i18n: any, defaultLang: string) {
        this._i18n = i18n;
        this.loadedLanguages.push(defaultLang);
    }

    public addProvider(provider: any) {
        this.providers.push(provider);
    }

    public loadLanguageAsync(lang: any) {
        const i18n = this._i18n;
        if (i18n.locale !== lang) {
            if (!this.loadedLanguages.includes(lang)) {
                const langs = this.getLocales(lang);
                return Promise.all(langs)
                        .then((msgs: any[]) => {
                            const langMsg = {};
                            msgs.map((item: any) => {
                                if (item.data != null) {
                                    _.assignIn(langMsg, item.data);
                                } else {
                                    _.assignIn(langMsg, item.default);
                                }
                            });
                            i18n.setLocaleMessage(lang, langMsg);
                            this.loadedLanguages.push(lang);
                            return this.setI18nLanguage(lang);
                        });
            }
            return Promise.resolve(this.setI18nLanguage(lang));
        }
        return Promise.resolve(lang);
    }

    private getLocales(lang: any) {
        const localeProviders: Array<Promise<any>> = [];
        this.providers.forEach((item: any) => {
                const provider = new item() as ILocalsProvider;
                localeProviders.push(provider.getMesage(lang));
            });
        return localeProviders;
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
