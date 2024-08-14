export type UserEntity = {
    id: number;
    username: string;
    fullName: string;
    email: string;
    photoProfile: string;
    bio: string;
    totalFollowers : number,
    totalFollowings : number
    createdAt : Date;
    updatedAt : Date;
}