import { PrismaClient, VerificationType } from "@prisma/client"
import { LoginDTO, RegisterDTO } from "../dto/CreateAuthDTO";
import { loginSchema, registerSchema } from "../validators/auth";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { transporter } from "../libs/nodemailer";


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

            if(!user.isVerified) throw new Error ("User is not verified")

            if(!user) {
                throw new Error('User not found!');
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

    async function createVerification (token : string, type : VerificationType) {
        try {
            return await prisma.verification.create({
               data : {
                   token,
                   type
               }
            })
        } catch (error) {
            throw new Error(error.message || 'Failed to retrieve users')
        }
    }

    async function verify(token : string) {
        try{
            
            const verification = await prisma.verification.findUnique({
                where : {token},
            });

            const userId = jwt.verify(verification.token, process.env.JWT_SECRET)
            
            if(verification.type === "FORGOT_PASSWORD") {
                //TODO : create forgot password
                return;
            }


            return await prisma.user.update({
                data: {
                    isVerified : true,
                },
                where : {
                    id : +userId,
                }
            })
        } catch(error) {
            throw new Error(error.message || 'Failed to verify email')
        }
        
    }


export default {register, login, verify, createVerification}