import { UserEntity } from "@/features/home/entities/User";


export type UserSearch = Pick<UserEntity, 'id' | 'fullName' | 'email' | 'photoProfile' | 'bio'>  & {
      followers : []
};