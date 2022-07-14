import express from "express";

const router = express.Router();


// Components
import online from "../components/online.js";


router.get("/online", online);

export default router;