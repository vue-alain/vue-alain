import { menuPemission } from '@/core/MenuFunction';

describe('menuHide', () => {
  test('menuHide', () => {
    const menuList = [{
      name: '1',
      children: [{
        name: '1-1',
        children: [
          { name: '1-1-1' },
        ],
      }],
    }];

    const permissionList: string[] = [];

    const resultMenu = menuPemission(menuList, permissionList);
    expect(resultMenu.length).toBe(1);
    const menu1 = resultMenu[0];
    expect(menu1.children.length).toBe(1);
    // tslint:disable-next-line
    const menu1_1 = menu1.children[0];
    expect(menu1_1.children.length).toBe(1);
    // tslint:disable-next-line
    const menu1_1_1 = menu1_1.children[0];
    expect(menu1_1_1.children.length).toBe(0);
  });

  test('permission menuHide', () => {
    const menuList = [{
      name: '1',
      children: [{
        name: '1-1',
        meta: {
          acl: {
            ability: ['dashboard.workplace'],
          },
        },
        children: [
          { name: '1-1-1' },
        ],
      }],
    }];

    const permissionList: string[] = ['dashboard.workplace'];

    const resultMenu = menuPemission(menuList, permissionList);
    expect(resultMenu.length).toBe(1);
    const menu1 = resultMenu[0];
    expect(menu1.children.length).toBe(1);
    // tslint:disable-next-line
    const menu1_1 = menu1.children[0];
    expect(menu1_1.children.length).toBe(1);
    // tslint:disable-next-line
    const menu1_1_1 = menu1_1.children[0];
    expect(menu1_1_1.children.length).toBe(0);
  });

  test('permission menuHide no permission', () => {
    const menuList = [{
      name: '1',
      children: [{
        name: '1-1',
        meta: {
          acl: {
            ability: ['dashboard.workplace'],
          },
        },
        children: [
          { name: '1-1-1' },
        ],
      }],
    }];

    const permissionList: string[] = ['dashboard.workplace.node'];

    const resultMenu = menuPemission(menuList, permissionList);
    expect(resultMenu.length).toBe(1);
    const menu1 = resultMenu[0];
    expect(menu1.children.length).toBe(0);
  });

});
