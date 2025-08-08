import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name :{type: String, required:[true,'user name is required'], 
    trim: true,
    minlength : 2,
    maxlength :50
    },

    email: {
        type: String,
        required:[true, 'user email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minlength:5,
        maxlength:255,
        match: [/\S+@\S+\.\S+/,'please fill a valid email address'],
        },
    password:{
        type:String,
        required:[true,'user password is required'],
        minLength:6,
    }
}, {timeseries: true});


const User = mongoose.model('User',userSchema);

export default User;
