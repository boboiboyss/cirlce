import express, {Request, Response} from 'express'
import { Authenticate } from '../middlewares/Authenticate';
import { RedisCheck } from '../middlewares/Redis';
import ThreadController from '../controllers/ThreadController';
import { upload } from '../middlewares/UploadFile';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
// import ThreadController from './controllers/ThreadController';
// import AuthController from './controllers/AuthController';
// import UserController from './controllers/UserController'
// import { upload } from './middlewares/UploadFile';
// import { Authenticate } from './middlewares/Authenticate';

const app = express();
// const port = process.env.PORT || 8000;
const router = express.Router();
const router2 = express.Router();
app.use("/api/v1", router);
app.use("/api/v2", router2);


app.get("/", async (req: Request, res: Response) => {

    // const OAuth2 = google.auth.OAuth2
    // const OAuth2Client = new OAuth2(
    //     process.env.CLIENT_ID,
    //     process.env.CLIENT_SECRET,
    //     "https://developers.google.com/oauthplayground"
    // )

    // OAuth2Client.setCredentials({
    //     refresh_token : process.env.REFRESH_TOKEN
    // });

    // const accessToken = OAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport ({
    //     service: "gmail",
    //     auth: {
    //       type: "OAuth2",
    //       user: "mokussimbolon@gmail.com",
    //       clientId: process.env.CLIENT_ID,
    //       clientSecret: process.env.CLIENT_SECRET,
    //       refreshToken: process.env.REFRESH_TOKEN,
    //       accessToken: accessToken
    //     },
    // });

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


    
router.get("/threads", Authenticate, RedisCheck, ThreadController.find)
router.get("/threads/:id", Authenticate, ThreadController.findOne)
router.post("/threads", Authenticate, upload.single("image"), ThreadController.create)
router.patch("/threads/:id", Authenticate, ThreadController.update)
router.delete("/threads/:id", Authenticate, ThreadController.remove)

router.post("/auth/login", AuthController.login)
router.post("/auth/register", AuthController.register)
router.post("/auth/check", Authenticate, AuthController.check)
router.get("/auth/verify-email", AuthController.verify)

router.get("/users", Authenticate, UserController.findOne)

module.exports = {router, router2, app} 