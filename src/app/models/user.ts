export class User {
    username: string;
    email: string;
    password: string;
    profilePic: number;
    admin: boolean;

    constructor(currentUser: any) {
        this.username = currentUser.username;
        this.email = currentUser.email;
        this.password = currentUser.password;
        this.profilePic = currentUser.profilePic;
        this.admin = currentUser.admin;
    }
}
