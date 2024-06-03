export type LoginDTO = {
    email : string;
    password : string;
}

export type RegisterDTO = {
    fullName : string;
    username : string;
    email : string;
    password : string;
}

export type UserDTO = {
    id: number;
    username: string;
    fullName: string;
    email: string;
    photoProfile: string;
    bio: string;
}
