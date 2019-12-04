/**
 * 语言服务
 */
import * as _ from 'lodash';

class AclService {

  public can(aclSource:any,acl:string):boolean{
    if(!aclSource){
      return true;
    }
    if(aclSource.permission){
      return _.includes(aclSource.permission,acl);
    }
    return true;
  }

  public canPermission(aclSource:any,acl:string):boolean{
    if(!aclSource){
      return true;
    }
    if(aclSource.permission){
      return _.includes(aclSource.permission,acl);
    }
    return true;
  }

}

const localeService = new AclService();

export default localeService;
