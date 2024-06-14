import {PrismaClient } from "@prisma/client";
import { UserDTO } from "../dto/CreateAuthDTO";
import { UserSchema } from "../validators/user";

const prisma = new PrismaClient()

// async function followedUser(user : UserDTO) {
//     try {
//         const users = await prisma.user.findMany();

//         // const validate =  UserSchema.validate(user)
//         // if(validate.error) throw new String(validate.error.message)
//         const followeds = await prisma.follow.findMany({
//             where: {
//                 followerId : user.id
//             }
//         })

//         const mappedUsers = followeds.map(followed => {
//             return users.map(user => {
//                 if(user.id === followed.followedId)
//                 return {
//                       ...user,
//                       isFollowed : true
//                 }
//                 return {
//                     ...user,
//                     isFollowed : false
//                 }
//             })
            
//         })[0]

//         return mappedUsers;

//     } catch (error) {
//         throw new String(error)
//     }
// }
 
    async function find (search : string) {
        try {
            return await prisma.user.findMany({
                where : {
                    username : {
                        contains : search,
                        mode : 'insensitive'
                    }
                }
            })
        } catch (error) {
            throw new Error(error.message || 'Failed to retrieve users')
        }
    }
export default {find}