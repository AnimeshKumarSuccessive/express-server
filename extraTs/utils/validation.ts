import { EmailType } from "../interface.js";
import { validateEmail } from "./helpers.js";  

    const validateUsers=(users : EmailType[]) => {
        const validUsers = []     // List of Valid users
        const invalidUsers = []   // List of Invalid users

        users.forEach((element: EmailType) => {
            const {traineeEmail,reviewerEmail} = element      

            validateEmail(traineeEmail) ? validUsers.push(traineeEmail): invalidUsers.push(traineeEmail);
            validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail): invalidUsers.push(reviewerEmail);
            }
        );
        console.log('invalidUsers', invalidUsers)
        console.log('validUsers', validUsers)    
        console.log('Number of Invalid users: \n', invalidUsers.length)
        console.log('Number of valid users: \n', validUsers.length) 
    
    }
//    validateUsers(users)
//
   

    export default validateUsers;