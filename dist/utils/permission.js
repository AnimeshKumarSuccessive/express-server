"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_js_1 = require("../constant.js");
const hasPermission = (moduleName, role, permissionType) => {
    const mod = constant_js_1.permissions.hasOwnProperty(moduleName);
    const result = mod && (constant_js_1.permissions[moduleName][permissionType].includes(role) || constant_js_1.permissions[moduleName].all.includes(role));
    return result;
};
//console.log(hasPermission('getUsers','trainer','read'))
exports.default = hasPermission;
//# sourceMappingURL=permission.js.map