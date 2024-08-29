import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

dotenv.config(); 

const PORT = process.env.PORT;
const URI = process.env.MongodbURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connected to MOngoDB");
} catch (error) {
    console.log("Error",error);
}


app.get('/',(req,res)=>{
    res.send("hello 345 world");
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT} `);
});
