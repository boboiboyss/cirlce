import { PrismaClient } from "@prisma/client"
import { LoginDTO, RegisterDTO } from "../dto/CreateAuthDTO";
import { loginSchema, registerSchema } from "../validators/auth";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


    const prisma = new PrismaClient();

    async function register(dto : RegisterDTO) {
        try{
            const validate = registerSchema.validate(dto)
            if(validate.error) throw new String(validate.error.message)
            const salt = 10;
            const hashedPassword = await bcrypt.hash(dto.password, salt)
            dto.password = hashedPassword

            return await prisma.user.create({
                data: {...dto}
            })
        } catch(error) {
            throw new String(error)
        }
        
    }

    async function login(dto : LoginDTO) {
        try{
            const validate = loginSchema.validate(dto)
           if(validate.error) throw new String(validate.error.message)
            
            const user = await prisma.user.findUnique({
                where : {
                    email: dto.email
                }
            })

            if(!user) {
                throw new String('User not found!');
            }

            const isValidPassowrd = await bcrypt.compare(dto.password, user.password)
            if(!isValidPassowrd) throw String('User not found!')

            delete user.password

            const jwtSecret = process.env.JWT_SECRET

            const token = jwt.sign(user, jwtSecret)

            return {token, user}
        } catch(error) {
            throw new String(error)
        }
        
    }

export default {register, login}