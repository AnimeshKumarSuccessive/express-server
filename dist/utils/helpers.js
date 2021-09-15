"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;
    return validRegex.test(email);
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map