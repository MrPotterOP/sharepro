import Item from "../model/items.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const download = (req, res)=>{
    const {id, photoID} = req.body;

    const removeDoc = ()=>{
        Item.deleteOne({_id: id}, (e, d)=>{
            if(e){
                console.log(e);
            }else{
                console.log(d);
            }
        });
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        });

        cloudinary.v2.uploader.destroy(photoID);
    }

    Item.findById(id, (err, doc)=>{
        if(err){
            return res.status(401).json({msg: "No data found"});
        }
        if(doc){
            doc.downloaded += 1;
            doc.save((error, data)=>{
                if(error){
                    return res.status(401).json({msg: "No data found"});
                }else {
                    if(data.downloaded === data.limit || data.downloaded > data.limit){
                        removeDoc();
                        return res.json({msg: "downloaded"});
                    }else{
                        return res.json({msg: "downloaded."});
                    }
                    
                }
            })
            
        }
    })
}


export default download;