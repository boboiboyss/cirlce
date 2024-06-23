import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function follow (idUserLogged : number, idUserFollowed : number) {
    try {
        if(idUserFollowed === idUserLogged) throw new String( 'You cannot follow yourself!')
        
        console.log('tes');
        const followed = await prisma.follow.findFirst({
            where : {
                followedId : idUserFollowed, 
                followerId : idUserLogged
            }
        });

        if(followed) throw new String('You already follow this user!')

        return await prisma.follow.create({
            data : {
                followerId : idUserLogged,
                followedId : idUserFollowed
            }
        });
    } catch (error) {
        throw new String (error)
    }
} 


async function unfollow (idUserLogged: number, idUserFollowed : number) {
    try {
        if(idUserFollowed === idUserLogged) throw new String( 'You cannot unfollow yourself!')
            const unfollowed = await prisma.follow.findFirst({
                where : {
                    followedId : idUserFollowed, 
                    followerId : idUserLogged
                }
            });
    
            if(unfollowed) throw new String('User not yet followed ')
    
            return await prisma.follow.delete({
                where : {
                    id : unfollowed.id
                }
            });
    } catch (error) {
        throw new Error (error)
    }
}
export default {follow, unfollow}