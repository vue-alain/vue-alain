import aclService from './AclService';

/**
 * 菜单权限
 * 根据权限判断调整菜单
 * @param menulist 菜单列表
 * @param permissionSource 已授权权限列表
 */
export function menuPemission(menulist: any[], permissionSource: any[]): any[] {
  const result: any[] = [];
  menulist.forEach( (item: any) => {
      if (item.children && item.children.length > 0) {
        item.children = menuPemission(item.children, permissionSource);
      } else {
        item.children = [];
      }

      if (item.meta !== undefined && item.meta.acl !== undefined) {
        if (aclService.canPermission(permissionSource, item.meta.acl.ability)) {
          result.push(item);
        }
      } else {
        result.push(item);
      }
  });
  return result;
}
