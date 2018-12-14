/**
 * 国际化提供者接口
 */
export interface ILocalsProvider {
    getMesage(lang: any): Promise<any>;
}
