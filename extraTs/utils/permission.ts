import {permissions} from "../constant.js";

const hasPermission : any = (moduleName, role, permissionType) =>{
    const mod: boolean = permissions.hasOwnProperty(moduleName);
    const result: any = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role))
    return result
 }
//console.log(hasPermission('getUsers','trainer','read'))
export default hasPermission