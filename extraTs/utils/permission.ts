import {permissions} from "../constant.js";

const hasPermission : any = (moduleName: any, role: any, permissionType: any) =>{
    const mod: boolean = permissions.hasOwnProperty(moduleName);
    const result: any = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role))
    return result
 }
//console.log(hasPermission('getUsers','trainer','read'))
export default hasPermission