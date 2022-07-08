import express from "express";
import mongoose from "mongoose";


const App = express();

App.use(express.json());


App.listen(4000, (req, res)=>{
    console.log("Backend Server is Live...");
});
