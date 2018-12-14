/**
 * 语言服务
 */
import * as _ from 'lodash';

/**
 * 语言提供者
 */
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
        return lang;
    }

}

const localeService = new LocaleService();

/**
 * 提供者的顺序影响国际化信息，后者提供的国际化内容替换前者
 */
// 添加antd语言提供者
localeService.addProvider(AntdLocaleProvider);
// 添加json语言提供者
localeService.addProvider(JsonLocaleProvider);

export default localeService;
