import joi from 'joi'
import { UserDTO } from '../dto/CreateAuthDTO'

export const UserSchema = joi.object<UserDTO>({
   username : joi.string(),
   fullName : joi.string(),
   photoProfile : joi.string(),
   bio : joi.string()

}) 