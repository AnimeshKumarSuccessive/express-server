import {permissions} from "../constant.js";

const hasPermission = (moduleName, role, permissionType) =>{
    const mod = permissions.hasOwnProperty(moduleName);
    const result = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role))
    return result
 }
 
export default hasPermission

