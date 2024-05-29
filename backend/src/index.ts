import { AppDataSource } from "./data-source"
import express, {Request, Response} from 'express'
import cors from 'cors'
import { Thread } from "./entities/Thread";


AppDataSource.initialize().then(async () => {
    const app = express();
    const port = 8000;
    const router = express.Router();
    const router2 = express.Router();

    
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

    const threadRepository = AppDataSource.getRepository(Thread)

    // v1
    router.get("/", (req : Request, res : Response) => {
        res.send("Hello welcome to circle v1")
    })

    router.get("/threads", async (req : Request, res: Response) => {
        const threads = await threadRepository.find()
        res.json({
            status : 'success',
            data : threads
        })
    })

    router.get("/threads/:id", async (req : Request, res : Response) => {
       const {id} = req.params;
       const threads = await threadRepository.findOne({
        where : {id : Number[id]}
       })

       res.json(threads)
    })

    router.put("/threads/:id", async (req : Request, res : Response) => {
        const {id} = req.params;
        const {content, image} = req.body;

        const threads = await threadRepository.findOne(Number[id])
        threads.content = content || threads.content;
        threads.image = image || threads.image; 

        await threadRepository.save(threads)

        res.json(threads)
    })


    //v2
    router2.get("/", (req : Request, res : Response) => {
        res.send("Hello welcome to circle v2")
    })
    
    app.listen(port, () => {
        console.log(`Server berjalan di port ${port}`)
    } )
}).catch(error => console.log(error))
