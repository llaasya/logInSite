export class NewUser {
    firstname !: string;
    lastname!: string;
    username!: string;
    email !:string;
    password!: string;
    role!: string;
};

export const Role = ['Admin', 'User'];