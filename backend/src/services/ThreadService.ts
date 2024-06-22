import { PrismaClient } from "@prisma/client"
import { CreateThreadDTO, UpdateThreadDTO } from "../dto/CreateThreadDTO";
import { createThreadSchema } from "../validators/thread";
import {v2 as cloudinary} from 'cloudinary'

    const prisma = new PrismaClient();

    async function find(){
    try {
          return await prisma.thread.findMany({
            include : {
                user : {
                    select : {
                        email : true,
                        fullName : true,
                        photoProfile : true
                    }
                }
            }
          })
        } catch(error) {
          throw new String(error)
        }

    }

    async function threadMe(userId : number){
        try {
              const thread = await prisma.thread.findMany({
                include : {
                    user : {
                        select : {
                            email : true,
                            photoProfile : true,
                            fullName : true,
                        }
                    }
                },
                where : {userId},
              })

              if(!thread.length) throw new String("Thread not found!");
              return thread;
            } catch(error) {
              throw new String(error)
            }
    
        }

    async function findOne(id:number){
        try {
            const thread =  await prisma.thread.findFirst({
                where : {id}
            });

            if(!thread) throw new String('Thread not found!')
                return thread
            } catch(error) {
                throw new String(error)
            }
    
        }

    async function create(dto : CreateThreadDTO, userId : number) {
        try{
            const validate = createThreadSchema.validate(dto)
            if(validate.error) {
               throw new String(validate.error.message) 
            }

            cloudinary.config({
                cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
                api_key : process.env.CLOUDINARY_API_KEY,
                api_secret : process.env.CLOUDINARY_API_SECRET
            });

            const upload = await cloudinary.uploader.upload(dto.image, {upload_preset : "imagecircle"})
            return await prisma.thread.create({
                data: {...dto, userId, image : upload.secure_url}
            })
        } catch(error) {
            throw new String(error)
        }
        
    }

    async function update(id : number, dto : UpdateThreadDTO) {
        try{
            const thread = await prisma.thread.findFirst({where : {id}})
            if(!thread) throw new String('Thread not found!')

            if(dto.content) {
                thread.content = dto.content
            }
    
            if(dto.content) {
                thread.image = dto.image
            }
    
            return await prisma.thread.update({
                where : {id},
                data : {...thread}
            })
    
        } catch(error) {
            throw new String(error)
        }
    }

    async function remove(id:number) {
        try {
            return await prisma.thread.delete({where : {id}})

            } catch (error) {
                throw new String(error)
            }
    }


export default {find, findOne, create, update, remove, threadMe}