
import Mock from 'mockjs';

Mock.mock('/login', 'post', (opt: any) => {
    const postData = JSON.parse(opt.body);
    if ( (postData.username === 'admin'  || postData.username === 'user') && postData.password === '888888') {
        return {
            token: postData.username,
        };
    }

    return {
        error: '账户或密码错误',
    };
});

export default Mock;
