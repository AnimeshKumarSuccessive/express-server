import { permissions } from './constant.js';

const hasPermission: any = (moduleName: string, role: string, permissionType: string): boolean => {
    const mod: boolean = permissions.hasOwnProperty(moduleName);
    const result: boolean = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role));
    return result;
 };
// console.log(hasPermission('getUsers','trainer','read'))
export default hasPermission;