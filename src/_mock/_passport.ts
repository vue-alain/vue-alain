
import Mock from 'mockjs';

Mock.mock('/login', 'post', (opt: any) => {
    const postData = JSON.parse(opt.body);
    console.log(postData);
    if ( postData.username === 'admin' && postData.password === '888888') {
        return {
            token: 'admin',
        };
    }

    return {
        error: '账户或密码错误',
    };
});

export default Mock;
