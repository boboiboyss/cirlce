import { PrismaClient } from '@prisma/client';
import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express();
const port = 8000;
const router = express.Router();
const router2 = express.Router();
const prisma = new PrismaClient();

        
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use("/api/v2", router2);


app.get("/", (req: Request, res: Response) => {
    res.json([
        {
            title: 'Hello welcome to circle',
            description: 'ini adalah description',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmL_fDSFZieso1A_GJuocC7waOIodM_uPNQ&s'
        }
        ])
    })



    // v1
router.get("/", (req : Request, res : Response) => {
    res.send("Hello welcome to circle v1")

    })

router.get("/threads", async (req : Request, res: Response) => {
    try {
        const threads = await prisma.thread.findMany()
        res.status(200).json({
            status : 'success',
            data : threads
        })

        } catch(error) {
            res.status(500).json({
                message : error
            })
        }
    })

router.get("/threads/:id", async (req : Request, res : Response) => {
    try {
        const {id} = req.params;
        const thread = await prisma.thread.count({
            where : {id : +id}
        });

        if(!thread) return res.status(404).json('Data not found!');

        const selectedThread = await prisma.thread.findFirst({
         where : {id : +id}
        })

        res.status(200).json(selectedThread)

      } catch(error) {
        res.status(500).json({
            message : error
        })
      }
    })

    type CreateThreadDTO = {
        image : string;
        content : string;
    }

router.post("/threads/", async (req : Request, res : Response) => {
    const dto = req.body as CreateThreadDTO
    const addThread = await prisma.thread.create({
        data: {...dto}
    })

    res.status(200).json({
        message : 'Thread berhasil ditambahkan',
        data : addThread
        })
    })

router.patch("/threads/:id", async (req : Request, res : Response) => {
    try{
        const {id} = req.params;
        const dto = req.body as CreateThreadDTO;

        const thread = await prisma.thread.findFirst({where : {id : +id}})

        if(!thread) return res.status(404).json({
            message : "data tidak ditemukan"
        })

        if(dto.content) {
            thread.content = dto.content
        }

        if(dto.content) {
            thread.image = dto.image
        }

        const updatedThread = await prisma.thread.update({
            where : {id : +id},
            data : {...thread}
        })

        res.status(200).json({
            message : 'updated thread success',
            data : updatedThread
        })

    } catch(error) {
        res.status(500).json({
             message : error
            })
        }
    })

router.delete("/threads/:id", async (req : Request, res : Response) => {
    try {
        const {id} = req.params;
        const thread = await prisma.thread.count({
            where : { id : +id}
        })

        if(!thread) return res.status(404).json({ message : 'Thread not found!'})   
        const deletedThread = await prisma.thread.delete({where : {id : +id}})
         res.status(200).json({
            message : 'Data berhasil di hapus',
            data : deletedThread
        })
        } catch (error) {
            res.status(500).json({
                message : error
            })
        }

    })


    //v2
    router2.get("/", (req : Request, res : Response) => {
        res.send("Hello welcome to circle v2")
    })
    
    app.listen(port, () => {
        console.log(`Server berjalan di port ${port}`)
    } )

