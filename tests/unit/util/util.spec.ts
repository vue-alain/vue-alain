import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';

import { fixedZero,getTimeDistance } from '@/util/util';
import moment from 'moment';

/*
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
*/

describe('fixedZero', () => {
    test('fixedZero', () => {
        expect(fixedZero(1)).toBe('01');
        expect(fixedZero(12)).toBe(12);
    });
});

describe('getTimeDistance', () => {

    test('getTimeDistance today', () => {
      const realDateNow = Date.now.bind(global.Date);
      const mill=moment('2019-10-01 12:35:45').unix();//.millisecond();
      //console.log('mill',mill);
      // Date.now = jest.fn(() => mill);
      // Date.now = jest.spyOn(Date, 'now').mockImplementation(() => mill);
      // Date.now = jest.genMockFunction().mockReturnValue(moment('2019-10-01 12:35:45').toDate());
      //global.Date = jest.fn(() => moment('2019-10-01 12:35:45').toDate());

      // global.Date = jest.fn(() => DATE_TO_USE);

      const dateNowStub = jest.fn(() => 1530518207007);
      global.Date.now = dateNowStub;

      const now = moment(new Date());
      console.log('now', now.format('YYYY-MM-DD HH:mm:ss'));


      const distance = getTimeDistance('today');
      expect(distance.length).toBe(2);
      expect(distance[0]).toBe(moment('2019-10-01 00:00:00'));
      expect(distance[1]).toBe('2019-10-01 23:59:59');

      global.Date.now = realDateNow;
        // expect(fixedZero(1)).toBe('01');
        // expect(fixedZero(12)).toBe(12);
    });
});
