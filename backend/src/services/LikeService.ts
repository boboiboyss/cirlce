import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function likes (userId : number, threadId : number ) {
    try {
        let totalLiked = 0;
        const isLiked = await prisma.like.findFirst({
            where : {
                userId,
                threadId
            }
        })

        if(isLiked) {
            const deleteLiked =  await prisma.like.delete({
                where : {
                    id : isLiked.id
                }
            })
            totalLiked -= 1
        }
         
        const liked = await prisma.like.create({
            data : {
                userId,
                threadId
            }
        });

        totalLiked += 1;

       

        return {...liked, totalLiked}
    } catch (error) {
        throw new String (error)
    }
} 

export default {likes}