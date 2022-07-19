import Item from "../model/items.js";


const checkId = (req, res)=>{
    const {id} = req.body;

    if(!id){
        return res.status(402).json({msg: "Id not Recived."});
    }
    Item.findById(id, (err, doc)=>{
        if(err){
            return res.status(404).json({msg: "Item Not Found"});
        }
        if(doc){
            return res.json({doc});
        }else {
            return res.status(404).json({msg: "Item Not Found"});
        }
    });
};

export default checkId;