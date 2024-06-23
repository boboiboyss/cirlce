import { Request, Response } from "express";
import ThreadService from "../services/ThreadService";
import { UserDTO } from "../dto/CreateAuthDTO";
import { redisClient } from "../libs/redis";

async function find(req : Request, res : Response) {
    try {
        const threads = await ThreadService.find();
        await redisClient.set("THREADS_DATA", JSON.stringify(threads), {
            EX : 600,
        })
        return res.status(200).json(threads)
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }
}

async function threadMe(req : Request, res : Response) {
    try {
        // const users = res.locals.user as UserDTO
        const {id} = req.params;
        const threads = await ThreadService.threadMe(+id);
        // if(!threads.length) return res.status(404).json({message : 'Threads not found!'});
         res.status(200).json(threads)
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

async function findOne (req : Request, res : Response) {
    try {
        const {id} = req.params;
    
        const selectedThread = await ThreadService.findOne(+id)
        if(!selectedThread) return res.status(404).json({message : 'Data not found!'});

        res.status(200).json(selectedThread)

      } catch(error) {
        res.status(500).json({
            message : error
        })
      }
    }

    async function create (req : Request, res : Response) {
         /*  #swagger.requestBody = {
            required: true,
            content: {
                "multipart/form-data": {
                    schema: {
                        $ref: "#/components/schemas/CreateThreadDTO"
                    }  
                }
            }
        } 
    */
        try{
            const user = res.locals.user as UserDTO
            const body = {
                ...req.body,
                image : req.file? req.file.path : ''
            }

            await redisClient.del("THREADS_DATA")

            const createThread = await ThreadService.create(body, user.id)
            res.status(201).json({
                message : 'Thread berhasil ditambahkan',
                data : createThread
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message : error
            })
        }
    }

    async function update (req : Request, res : Response)  {
            try {
                const {id} = req.params

                const thread = await ThreadService.findOne(+id)
                if(!thread) return res.status(404).json({message : 'Thread not found!'})


                const updateThread = await ThreadService.update(+id, req.body)
                res.status(200).json({
                    message : 'Thread berhasil diupdate',
                    data : updateThread
                })

            } catch (error) {
                res.status(500).json({
                    message : error
                })
            }
        }

    async function remove (req : Request, res : Response) {
            try {
                const {id} = req.params;
                const thread = await ThreadService.findOne(+id)
                if(!thread) return res.status(404).json({message : "Thread not found!"})

                const deletedThread = await ThreadService.remove(+id)
                
                 res.status(200).json({
                    message : 'Data berhasil di hapus',
                    data : deletedThread
                })
                } catch (error) {
                    res.status(500).json({
                        message : error
                    })
                }
        
            }    


export default {find, findOne, create, update, remove, threadMe}