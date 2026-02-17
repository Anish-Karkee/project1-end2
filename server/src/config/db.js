import mongoose from "mongoose"
import  dotenv from 'dotenv'
dotenv.config()

const mongoUrl=process.env.MONGO_URL


mongoose.conncet(mongoUrl)


export const db=mongoose.connection


db.on('connected',()=>{
    console.log("mongoDB connected successfully")
})
db.on('error',(err)=>{
    console.log("error connecting to mongoDB",err)
})
db.on('disconnected',()=>{
    console.log("mongoDB disconnected")
})