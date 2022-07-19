import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 20,
        min: 4,
        default: "anonymous"
    },
    limit: {
        type: Number,
        max: 50,
        min: 1,
        default: 20
    },
    downloaded: {
        type: Number,
        max: 50,
        default: 0
    },
    photoURL: {
        type: String
    },
    password: {
        type: String,
        min: 5
    },
    photoID: {
        type: String
    }
});

const Item = new mongoose.model("item", itemSchema);

export default Item;