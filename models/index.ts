import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: String, 
    comment: String,
    date: Date,
});

const Posts = mongoose.model("Posts", postSchema);

export {Posts}