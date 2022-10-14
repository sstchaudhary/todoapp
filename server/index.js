import express from 'express';
import  Connection  from './database/db.js';
import route from './routes/route.js';
 import cors from 'cors';

const app=express();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use('/',route);
 Connection();
const PORT=process.env.PORT||8000
 app.listen(PORT,'localhost',()=>{
    console.log(`server running on ${PORT}`);
 })