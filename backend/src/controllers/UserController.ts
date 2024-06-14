import { Request, Response } from "express";
import UserService from "../services/UserService";

async function findOne (req : Request, res : Response) {
    try {
        const search = req.query.search as string;
        const users = await UserService.find(search)
      
        res.status(200).json(users)

      } catch(error) {
        res.status(500).json({
            message : error
        })
      }
    }

    export default {findOne}