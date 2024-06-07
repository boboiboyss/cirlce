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