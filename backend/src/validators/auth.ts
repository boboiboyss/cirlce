import joi from "joi";
import { LoginDTO, RegisterDTO } from "../dto/CreateAuthDTO";



export const loginSchema = joi.object<LoginDTO>({
    email : joi.string().email().required(),
    password : joi.string().required()

})

export const registerSchema = joi.object<RegisterDTO>({
    fullName : joi.string(),
    username : joi.string().required().min(3).max(30),
    email : joi.string().email().required(),
    password : joi.string().required()

})