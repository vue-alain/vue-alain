import {
    Vue,
} from 'vue-property-decorator';

class LocaleService {
    private _i18n: any = null;
    private loadedLanguages: string[] = [];

    public init(i18n: any, defaultLang: string){
        this._i18n = i18n;
        this.loadedLanguages.push(defaultLang);
    }
    public loadLanguageAsync(lang: any) {
        const i18n = this._i18n;
        if (i18n.locale !== lang) {
            if (!this.loadedLanguages.includes(lang)) {
                return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`).then((msgs: any) => {
                    i18n.setLocaleMessage(lang, msgs.default);
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

export default localeService;
