import {rulemock} from './_rule';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 200 });

export default {
    init: () => {
        rulemock(mock);
        mock.onAny().passThrough();
    },
};
