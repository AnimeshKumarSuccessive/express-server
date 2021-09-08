"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./patterns/index.js");
const index_js_2 = require("./patterns/index.js");
const index_js_3 = require("./utils/index.js");
const constant_js_1 = require("./constant.js");
console.log("It is a diamond pattern");
(0, index_js_1.diamond)(5);
console.log("It is a equilateral pattern");
(0, index_js_2.equilateral)(10);
console.log("It is a boolean value True and False");
console.log((0, index_js_3.hasPermission)('getUsers', 'trainer', 'read'));
console.log("To check the email is valid or not and it's count");
(0, index_js_3.validateUsers)(constant_js_1.users);
//# sourceMappingURL=index.js.map