//import mockjs from 'mockjs';

const mockjs = require('mockjs');

const TESTS = {
    'get /test': (req, res) => {
        const json = { message: 'hello mockjs Ok' };
        res.json(mockjs.mock(json));
    },
};

/*
export const TESTS = {
        'get /test': (req: any, res: any) => {
            const json = { message: 'hello mockjs Ok' };
            res.json(mockjs.mock(json));
        },
    };
*/

module.exports = {
    ...TESTS,
};
