import Item from "../model/items.js";
import bcrypt from "bcryptjs";

const validation = (req, res) =>{
    const {id, password} = req.body;


    if(!id || !password){
        return res.status(402).json({msg: "no id/password given."});
    }

    Item.findById(id, (err, doc)=>{
        if(err){
            return res.status(404).json({msg: "no items found."});
        }
        if(doc){
            const itemPassword = doc.password;

            bcrypt.compare(password, itemPassword, (error, success)=>{
                if(error){
                    return res.status(501).json({msg: "Internal Error."});
                }
                if(!success){
                    return res.status(401).json({msg: "Wrong Password."});
                }
                return res.json({photoURL: doc.photoURL, limit: doc.limit, downloaded: doc.downloaded , name: doc.name});
            });
        };
    });
}

export default validation;