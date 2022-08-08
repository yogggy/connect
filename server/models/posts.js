const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    username:{type:String},
    caption:{type:String},
    img:{type:String}, 
});
const PostData = new mongoose.model('posts',postSchema);
module.exports = PostData;