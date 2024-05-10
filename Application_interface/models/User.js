const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {type:String,unique:true},
},{timestamps:true});

const UserModel = new mongoose.model('User',UserSchema);
module.exports = UserModel;