import express from 'express'
import mongoose from 'mongoose'
import path from 'path';
import { allowedNodeEnvironmentFlags } from 'process';
import movieRoutes from './routes/MovieRoutes.js';

const app = express(); 


app.use(express.urlencoded({ extended: true }));


const CONNECTION_URL = 'mongodb+srv://critixMaster:d4CHNj6NHaOFlybb@cluster0.0lulxnr.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001; 

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connection to mongoDB established!")
    })
    .catch(err => {
        console.log("Connection failed\n Error: ", err);
    })

app.use('/', movieRoutes);


// app.get('/', async (req, res, next) =>{
//     res.json({"users": ["John", 'Joe', 'Bob']})
// })


app.listen(3001, () => {
    console.log("Listening at port 3001")
})