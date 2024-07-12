
import mongoose from 'mongoose';

const usreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    }
});

const User =mongoose.model('User',usreSchema);
export default User;