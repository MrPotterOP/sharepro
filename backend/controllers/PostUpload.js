import cloudinary from "cloudinary";
import Item from "../model/items.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import fs from "fs";

dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const upload = (req, res) => {
    const {name, limit, password} = req.body;
    const filePath = req.files.photo.tempFilePath;

        if(name.length < 3 || limit >= 50 || limit === 0 || password.length < 4 || password.length > 30){
            return res.status(401).json({msg: "Invalid data inputs."}); 
        }else {
                cloudinary.v2.uploader.upload( filePath, (err, result)=>{
                    if(err){
                        return res.staus(500).json({msg: "Some error Occured"});
                        } 
                    if(result){
                bcrypt.genSalt(4, (err, salt)=>{
                if(err){
                    return res.staus(500).json({msg: "Some error Occured."});
                }
                bcrypt.hash(password, salt, (error, hash)=>{
                    if(error){
                        return res.staus(500).json({msg: "Some error occured"});
                    }

                    Item.create({name, limit, password: hash, photoURL: result.secure_url, photoID: result.public_id}, (e, doc)=>{
                        if(e){
                            res.status(401).json({msg: "some error occured"})
                        }if(doc){
                            res.json({id: doc._id});
                            fs.rm(filePath, (er)=>{
                                if(err){
                                    console.log(er);
                                }
                            })
                        }
                    });
                })
            })
         }
    });

}
};

export default upload;