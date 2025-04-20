import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
        First_Name:{
            type:String,
            required : true
        },
        Last_Name:{
            type:String,
            required : true
        },
        Adress:{
            type:String,
            required : true
        },
        City:{
            type:String,
            required : true
        },
        Telephone:{
            type:String,
            required : true
        },
        Pets:{
            type:String,
            required : true
        }
        

})

export default mongoose.model("Owners", ownerSchema)