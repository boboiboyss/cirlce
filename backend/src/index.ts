import { PrismaClient } from '@prisma/client';
import express, {Request, Response} from 'express'
import cors from 'cors'
import ThreadController from './controllers/ThreadController';
import { CreateThreadDTO } from './dto/CreateThreadDTO';
import AuthController from './controllers/AuthController';
import dotenv from 'dotenv'
import { upload } from './middlewares/UploadFile';
dotenv.config();

const app = express();
const port = 8000;
const router = express.Router();
const router2 = express.Router();

        
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static('uploads'));
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


    
    //v2
    router2.get("/", (req : Request, res : Response) => {
        res.send("Hello welcome to circle v2")
    })

    // v1
router.get("/", (req : Request, res : Response) => {
    res.send("Hello welcome to circle v1")

    })


    
router.get("/threads", ThreadController.find)
router.get("/threads/:id", ThreadController.findOne)
router.post("/threads", upload.single("image"), ThreadController.create)
router.patch("/threads/:id", ThreadController.update)
router.delete("/threads/:id", ThreadController.remove)

router.post("/auth/login", AuthController.login)
router.post("/auth/register", AuthController.register)


 
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
} )

