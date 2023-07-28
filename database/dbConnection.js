import mongoose from "mongoose";

export function dbConnection(){
    mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
        console.log('Mongo connected successfully');

    }).catch((err)=>{
        console.log(`Error is ${err}`)
    })
}