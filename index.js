import { configDotenv } from "dotenv";
import express from 'express';
import mongoose from "mongoose";
import User from "./userSchema.js";
configDotenv();

const DB =process.env.DB;
const PORT=process.env.PORT;

const app=express();

app.use(express.json());


mongoose.connect(DB)
.then(()=>console.log('DB connect'))
.catch((error)=>console.log("DB Not connect",error));

app.post('/add', async (req,res)=>{
    try {
        const {name,place}=req.body;
        if(!name|| !place){
            return res.status(404).json({message:'Plese require name or place'});
        }
    const user= new User ({  name,place});
    
    await user.save();
    res.status(200).json({message:"user add succsufullly"});
    } catch (error) {
        res.status(500).json({message:'Server error!'});
    }    
})




app.listen(PORT,()=>{
    console.log(`Server run at ${PORT}`);
})