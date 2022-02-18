export class NewUser {
    firstname !: string;
    lastname!: string;
    username!: string;
    password!: string;
    email!:string;
    role!: string;
};

export const Role = ['Admin', 'User'];