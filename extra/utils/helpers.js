const validateEmail=(email)=>{

    const validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;

     
        return validRegex.test(email);

    
}

export {validateEmail}
