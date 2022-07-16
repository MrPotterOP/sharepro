import express from "express";

const router = express.Router();


// Components
import GetOnline from "../controllers/GetOnline.js";
import PostUpload from "../controllers/PostUpload.js";


router.get("/online", GetOnline);
router.post("/upload", PostUpload);

export default router;