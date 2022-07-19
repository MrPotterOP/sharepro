import express from "express";

const router = express.Router();


// Components
import GetOnline from "../controllers/GetOnline.js";
import PostUpload from "../controllers/PostUpload.js";
import PatchCheckId from "../controllers/PatchCheckId.js";
import PatchValidation from "../controllers/PatchValidation.js";
import PutDownload from "../controllers/PutDownload.js";


router.get("/online", GetOnline);
router.post("/upload", PostUpload);
router.patch("/check_id", PatchCheckId);
router.patch("/validation", PatchValidation);
router.put("/download", PutDownload);

export default router;