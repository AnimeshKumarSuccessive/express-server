const users = [     // Array of Objects, Objects contain email
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },

    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },

    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
    ]

    const validateEmail=(email)=>{

        var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;

            return validRegex.test(email);
    }

    const validUsers = []     // List of Valid users
    const invalidUsers = []   // List of Invalid users

    const validateUsers=(users)=>{

        users.forEach(element => {
            const {traineeEmail,reviewerEmail} = element      

            validateEmail(traineeEmail,reviewerEmail) ? validUsers.push(element): invalidUsers.push(element);
            }
        );
    }
    validateUsers(users)
    console.log('invalidUsers', invalidUsers)
    console.log('validUsers', validUsers)    
    console.log('Number of Invalid users: \n', invalidUsers.length)
    console.log('Number of valid users: \n', validUsers.length) 