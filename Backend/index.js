import express, { response } from "express";
import {PORT,mongoURL} from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

//Middleware for parsing request body 
app.use(express.json());


// method2:
app.use(cors());


//method1:
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }));


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome To MERN stack Tutorial');
});

app.use('/books',booksRoute);


mongoose
.connect(mongoURL)
.then(()=>{
    console.log('App is connected to database');
    app.listen(PORT, ()=>{
        console.log(`App is listening to port:${PORT}`)
    });
    
})
.catch((error)=>{
    console.log(error);
});