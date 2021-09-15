interface EmailType {
    traineeEmail: string;
    reviewerEmail: string;
}

interface GetUsers {
    all: string[];
    read: string[];
    write: string[];
    delete: any[];
}

interface UserType {
    getUsers: GetUsers;
}

export { EmailType , UserType , GetUsers };