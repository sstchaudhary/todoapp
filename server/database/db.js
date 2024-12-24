import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

 const username=process.env.USER_NAME;
 const password=process.env.USER_PASSWORD;
const Connection=()=>{
    // const URL=`mongodb+srv://${username}:${password}@crud-app.qs3vd5h.mongodb.net/?retryWrites=true&w=majority`;
         const URL= `mongodb+srv://${username}:${password}@crud-app.wihdy.mongodb.net/`;
    
        mongoose.connect(URL,{useNewUrlParser:true});
        mongoose.connection.on('connected',()=>{
            console.log("daatabase connected succesfully");
        })
        mongoose.connection.on('disconnected',()=>{
            console.log("daatabase disconnected");
        })
        mongoose.connection.on('error',()=>{
            console.log("errorwhile connecting with database ",error.message);
        })
        
    } 
export default Connection;
