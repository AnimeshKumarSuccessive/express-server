import {permissions} from "../constant.js";


/*
const hasPermission = (moduleName, role, permissionType) =>{

    let found = false
    const obj = permissions[moduleName]         // fetching the module from name
    const permission = obj[permissionType]      // fetching type of permission
    permission.forEach(element => {     // iterating to check permission
        if(element == role){
                found = true        // if role is found in permission the return true
                return found
        }
    });

    return found            // if not found, automatically return false
}
*/


const hasPermission = (moduleName, role, permissionType) =>{
    const mod = permissions.hasOwnProperty(moduleName);
    const result = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role))
    return result
 }
//console.log(hasPermission('getUsers','trainer','read'))
export default hasPermission

