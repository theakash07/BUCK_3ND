import mongoose from "mongoose";

const subscriptionschema = new mongoose.Schema({
    name:{
        type: String,
        require:[true, "susbscription name is required"],
        trim:true,
        minLength:2,
        maxLength:100,
        },
    price: {
        type:Number,
        required :[true, 'Subscription is required'],
        min:[0,'Price must be greater than 0'],

    },
    currency:{
        type : String,
        enum:['USD','EUR','GBP','INR'],
        default: 'INR',
    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly']
    },
    category:{
        type:String,
        enum:['sports','news','entertainment','lifestyle','technology','finance','politics','other'],
        required:true
    },
    paymentmethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum:['active','cancelled','expired'],
        default: 'active'
    },
    startDate:{
        type:Data,
        required:true,
        validate:{
            validator:(value) value > this.startDate(),
            message:"start must be in the past",

        }
    }

    
},{timeseries:true});