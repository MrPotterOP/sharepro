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

const PORT = process.env.PORT || 8080

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
App.use("/api", router);

//Connect to the database before listening
connectDB().then(() => {
    App.listen(PORT, () => {
        console.log("listening for requests");
    })
})


App.listen(process.env.PORT || 4000, (req, res)=>{
    console.log("Backend Server is Live...");
});
