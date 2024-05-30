import { Request, Response } from "express";
import ThreadService from "../services/ThreadService";

async function find(req : Request, res : Response) {
    try {
        const threads = await ThreadService.find();
        return res.json(threads)
    } catch (error) {
        return error
    }
}

async function findOne (req : Request, res : Response) {
    try {
        const {id} = req.params;
        // const thread = await ThreadService.findOne({
        //     id : +id
        // })

        // if(!thread) return res.status(404).json('Data not found!');

        const selectedThread = await ThreadService.findOne({
         id : Number[id]
        })

        res.status(200).json(selectedThread)

      } catch(error) {
        res.status(500).json({
            message : error
        })
      }
    }

    async function create (req : Request, res : Response) {
        try{
            const createThread = await ThreadService.create(req.body)
            res.status(200).json({
                message : 'Thread berhasil ditambahkan',
                data : createThread
            })
        } catch (error) {
            res.status(500).json({
                message : error
            })
        }
    }

    async function update (req : Request, res : Response)  {
            try {
                const {id} = req.params
                const updateThread = await ThreadService.update(+id, req.body)

                res.json({
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