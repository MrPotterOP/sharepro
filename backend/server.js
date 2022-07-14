import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

dotenv.config();

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err){
        console.log("Database Connected.");
    }else{
        console.log(err);
    }
});

const App = express();

App.use(express.json());
App.use("/api/", router);


App.listen(process.env.PORT || 4000, (req, res)=>{
    console.log("Backend Server is Live...");
});
