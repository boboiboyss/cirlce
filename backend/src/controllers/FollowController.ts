import { Request, Response } from "express";
import { UserDTO } from "../dto/CreateAuthDTO";
import FollowServices from "../services/FollowServices";


async function follow (req : Request, res : Response) {
    try {
        const {id} = req.params
        const user = res.locals.user as UserDTO
        console.log(user.id, id)
        const following = await FollowServices.follow(user.id, +id)
        res.status(200).json(following)
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }
}

export default {follow}