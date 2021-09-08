interface EmailType {
    traineeEmail: string;
    reviewerEmail: string;
}

interface getUsers{
    all: string[];
    read: string[];
    write: string[];
    delete: any[];
}

interface UserType{
    getUsers: getUsers;
}

export {EmailType , UserType , getUsers}