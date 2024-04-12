// packages 
import express from "express"
import dotenv from "dotenv"

// files 
import authRoutes from "./routes/auth.routes.js"
import ConnectToDataBase from "./DB/ConnectToDataBase.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config()
app.use(express.json());

// root route 
app.get("/",(req,res)=>{
    res.send("hello world!");
})

// using middlewear for authentications 
app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    ConnectToDataBase()
    console.log(`server is running  on port ${PORT}`);
})