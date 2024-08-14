import { Request, Response } from "express";
import { UserDTO } from "../dto/CreateAuthDTO";
import LikeService from "../services/LikeService";

async function likes (req : Request, res : Response) {
    try {
        const {id} = req.params;
        const user = res.locals.user as UserDTO;
        const likes = await LikeService.likes(user.id, +id);
        res.status(200).json(likes)

    } catch (error) {
        res.status(500).json({
            message : error 
        })
    }
}

export default {likes}