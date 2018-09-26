import axios from 'axios';

class Startup {
    public static bootstrap(): any {
        const url = '/app.json';
        return axios.get(url);
    }
}

export default Startup;
