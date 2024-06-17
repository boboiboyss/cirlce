import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import jwt from 'jsonwebtoken'
import { transporter } from "../libs/nodemailer";

    async function register (req : Request, res : Response) {
        /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/RegisterDTO"
                    }  
                }
            }
        } 
    */
        try{
            const user = await AuthService.register(req.body);

            const token = jwt.sign(user.id.toString(), process.env.JWT_SECRET);

            const fullUrl = req.protocol + '://' + req.get("host");

            const info = await transporter.sendMail({
                from: `Circle <${process.env.EMAIL_USER}>`, // sender address
                to: user.email, // list of receivers
                subject: "Verify Email", // Subject line
                html: `<a href="${fullUrl}/api/v1/auth/verify-email?token=${token}">Klik link untuk verification email</a>`, // html body
            });
            
              console.log("Message sent: %s", info.messageId);

            await AuthService.createVerification(token, "EMAIL")
            res.status(200).json({
                message : 'Register Berhasil',
                data : user
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message : error
            })
        }
    }

    async function login (req : Request, res : Response) {
        /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginDTO"
                    }  
                }
            }
        } 
    */
        try{
            const user = await AuthService.login(req.body)
            res.json(user)
        } catch (error) {
            res.status(500).json({
                message : error
            })
        }
    }

    async function check (req : Request, res : Response) {
        try{
            res.json(res.locals.user)
        } catch (error) {
            res.status(500).json({
                message : error.message
            })
        }
    }

    async function verify (req : Request, res : Response) {
        try{
            const token = req.query.token as string
            await AuthService.verify(token)
            const frontendURL = process.env.FRONTEND_URL
            res.redirect(`${frontendURL}/auth/login`)
        } catch (error) {
            res.status(500).json({
                message : error.message
            })
        }
    }
 


export default {register, login, check, verify}