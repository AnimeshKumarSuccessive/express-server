"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./helpers.js");
const validateUsers = (users) => {
    const validUsers = []; // List of Valid users
    const invalidUsers = []; // List of Invalid users
    users.forEach(element => {
        const { traineeEmail, reviewerEmail } = element;
        (0, helpers_js_1.validateEmail)(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail);
        (0, helpers_js_1.validateEmail)(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail);
    });
    console.log('invalidUsers', invalidUsers);
    console.log('validUsers', validUsers);
    console.log('Number of Invalid users: \n', invalidUsers.length);
    console.log('Number of valid users: \n', validUsers.length);
};
//    validateUsers(users)
//
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map