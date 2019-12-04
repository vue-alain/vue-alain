/**
 * 语言服务
 */
import * as _ from 'lodash';

class AclService {

  public can(aclSource: any, acl: string): boolean {
    if (!aclSource) {
      return true;
    }
    if (aclSource.permission) {
      return _.includes(aclSource.permission, acl);
    }
    return true;
  }

  public canPermission(permissionSource: string[], acl: string[]): boolean {
    if (!permissionSource) {
      return true;
    }
    return _.intersection(permissionSource, acl).length > 0;
  }

}

const aclService = new AclService();

export default aclService;
