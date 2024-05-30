import { PrismaClient } from "@prisma/client"
import { CreateThreadDTO, UpdateThreadDTO } from "../dto/thread/CreateThreadDTO";

    const prisma = new PrismaClient();

    async function find(){
    try {
          return await prisma.thread.findMany()
        } catch(error) {
          return error
        }

    }

    async function findOne({id} : {id:number}){
        try {
            return await prisma.thread.findFirst({
                where : {id}
            });
            } catch(error) {
              return error
            }
    
        }

    async function create(dto : CreateThreadDTO) {
        return await prisma.thread.create({
        data: {...dto}
        } 
    )}

    async function update(id : number, dto : UpdateThreadDTO) {
        try{
            const thread = await prisma.thread.findFirst({where : {id : +id}})
    
            if(dto.content) {
                thread.content = dto.content
            }
    
            if(dto.content) {
                thread.image = dto.image
            }
    
            return await prisma.thread.update({
                where : {id : +id},
                data : {...thread}
            })
    
        } catch(error) {
            return error
        }
    }

        async function remove(id:number) {
            try {
                return await prisma.thread.delete({where : {id : +id}})

            } catch (error) {
                return error
            }
        }


export default {find, findOne, create, update, remove}