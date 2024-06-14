import { Request, Response } from "express";
import ThreadService from "../services/ThreadService";
import { UserDTO } from "../dto/CreateAuthDTO";

async function find(req : Request, res : Response) {
    try {
        const threads = await ThreadService.find();
        return res.status(200).json(threads)
    } catch (error) {
        res.status(500).json({
            message : error
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
        try{
            const user = res.locals.user as UserDTO
            const body = {
                ...req.body,
                image : req.file? req.file.path : ''
            }
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


export default {find, findOne, create, update, remove}