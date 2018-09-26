import axios from 'axios';

class AxiosInterceptor {
    public static init(): void {
        axios.interceptors.response.use((response: any) => {
            // 由于mackjs改写了返回内容，所以这里必须调整
            const data = response.data == null ? response : response.data;
            return data;
        },
        (err: any) => {
        });
    }
}

export default AxiosInterceptor;
