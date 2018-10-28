import Mock from 'mockjs';

function getTags() {
    return Mock.mock({
        'list|100': [{ 'name': '@city', 'value|1-100': 150, 'type|0-2': 1 }],
    });
}

Mock.mock(RegExp('/api/tag'), 'get', getTags);
