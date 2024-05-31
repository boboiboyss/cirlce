import { Request, Response } from "express";
import AuthService from "../services/AuthService";

    async function register (req : Request, res : Response) {
        try{
            const user = await AuthService.register(req.body)
            console.log(user);
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
        try{
            const user = await AuthService.login(req.body)
            res.status(200).json({
                data : user
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message : error
            })
        }
    }
 


export default {register, login}