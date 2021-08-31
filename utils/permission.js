const permissions = 
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}


const hasPermission = (moduleName, role, permissionType) =>{
   const mod = permissions.hasOwnProperty(moduleName);
   const result = mod && (permissions[moduleName][permissionType].includes(role) || permissions[moduleName].all.includes(role))
   return result
}

console.log(hasPermission('getUsers','head-trainer','read'))