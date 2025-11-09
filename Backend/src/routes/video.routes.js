import { Router } from 'express';
import {
    deleteVideo,
    getAllVideos,
    getUserAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
} from "../controller/video.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();


//public routes

router.route("/")
    .get(getAllVideos);

router.route("/:videoId")
    .get(getVideoById)    

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
    .route("/publish")
    .post(
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
            
        ]),
        publishAVideo
    );



//  router.route(
//     "/publish"
//  )   
// .post(publishAVideo)



router.route("/:videoId")
    .delete(deleteVideo)
    .patch(upload.single("thumbnail"), updateVideo);

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);


    
router
    .route("/userVideos")  
    .get(getUserAllVideos)  

export default router