import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserDTO } from "../dto/CreateAuthDTO";

async function findSearch (req : Request, res : Response) {
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

    async function findOne (req : Request, res : Response) {
      try {
          const users = res.locals.user as UserDTO
          const getUser = await UserService.findOne(users.email)
          res.status(200).json(getUser)
  
        } catch(error) {
          res.status(500).json({
              message : error
          })
        }
      }

  async function update (req : Request, res : Response) {
    try {
      const user = res.locals.user as UserDTO
      const {fullName, username, bio} = req.body
      const body = {
        fullName,
        username,
        bio,
        photoProfile : req.file? req.file.path : ''
      } as UserDTO

      console.log(body, user.email);

      const updateUser = await UserService.update(body, user.email )
      res.status(200).json({
        message : 'User updated successfully',
        data : updateUser
      })
    } catch (error) {
      res.status(500).json({
        message : error.message
      })
    }
  }

    export default {findSearch, update, findOne}