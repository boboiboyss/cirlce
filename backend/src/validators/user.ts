import joi, { string } from 'joi'
import { UserDTO } from '../dto/CreateAuthDTO'

export const UserSchema = joi.object<UserDTO>({
   username : joi.string(),
   fullName : joi.string(),
   email : joi.string().required(),
   photoProfile : joi.string(),
   bio : joi.string()

}) 