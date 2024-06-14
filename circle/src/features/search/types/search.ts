import { UserEntity } from "@/features/home/entities/User";


export type UserSearch = Pick<UserEntity, 'fullName' | 'email' | 'photoProfile' | 'bio'>  & {
      isFollowed : true
};