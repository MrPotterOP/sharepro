import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err){
        console.log("Database Connected.");
    }else{
        console.log(err);
    }
});

const App = express();
App.use(cors());
App.use(express.json());
App.use(fileUpload({useTempFiles: true}));
App.use("/api/", router);


App.listen(process.env.PORT || 4000, (req, res)=>{
    console.log("Backend Server is Live...");
});
