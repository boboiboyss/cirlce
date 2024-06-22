export interface ICard {
    name : string,
    post_image? : string,
    email : string,
    post_at : string,
    content : string,
    replies_count : number,
    likes_count : number,
    image : string,
    is_like : boolean
}  


export type LoginForm = {
    email : string,
    password : string
}

export type Threads = {
    content : string;
    image : string;
    createdAt : Date;
}

export type CreateThreadDTO = {
    content : string,
    image : FileList
}

export type CreateUserDTO = {
    fullName : string,
    username : string,
    bio : string,
    photoProfile : FileList
}