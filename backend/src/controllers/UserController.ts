import { Request, Response } from "express";
import UserService from "../services/UserService";

async function findOne (req : Request, res : Response) {
    try {
        const user = res.locals.user
        const userFollowed = await UserService.followedUser(user)
        // if(!userFollowed) return res.status(404).json({message : 'Data not found!'});

        res.status(200).json(userFollowed)

      } catch(error) {
        res.status(500).json({
            message : error
        })
      }
    }

    export default {findOne}