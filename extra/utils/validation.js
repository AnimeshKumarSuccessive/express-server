import { validateEmail } from "./helpers.js";


/*
    var validUsers = []     // List of Valid users
    var invalidUsers = []   // List of Invalid users

    const validateUsers=(users)=>{

        users.forEach(element => {
            const {traineeEmail} = element      // using destructing 
            const {reviewerEmail} = element     // using destructing

            validateEmail(traineeEmail)==true?validUsers.push(traineeEmail):invalidUsers.push(traineeEmail)
            validateEmail(reviewerEmail)==true?validUsers.push(reviewerEmail):invalidUsers.push(reviewerEmail)
            }
        );
        console.log();
        //  validateUsers(users)
      
          console.log('Valid users:')
          validUsers.forEach(element => {
              console.log(element)
          });
          console.log('Number of Valid users: \n', validUsers.length)
      
          console.log();
      
          console.log('Invalid users:')
          invalidUsers.forEach(element => {
              console.log(element)
          });
          console.log('Number of Invalid users: \n', invalidUsers.length)
    }
*/

    

    const validateUsers=(users)=>{
        const validUsers = []     // List of Valid users
        const invalidUsers = []   // List of Invalid users

        users.forEach(element => {
            const {traineeEmail,reviewerEmail} = element      

            validateEmail(traineeEmail,reviewerEmail) ? validUsers.push(element): invalidUsers.push(element);
            }
        );
        console.log('invalidUsers', invalidUsers)
        console.log('validUsers', validUsers)    
        console.log('Number of Invalid users: \n', invalidUsers.length)
        console.log('Number of valid users: \n', validUsers.length) 
    
    }
//    validateUsers(users)
   

    export default validateUsers;