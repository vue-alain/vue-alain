import axios from 'axios';
/**
 * 程序启动服务
 */
class Startup {
    /**
     * 程序启动，主要是请求app.json
     */
    public static bootstrap(): any {
        const url = '/app.json';
        return axios.get(url);
    }
}

export default Startup;
