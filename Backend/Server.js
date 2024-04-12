// packages 
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// files 
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import ConnectToDataBase from "./DB/ConnectToDataBase.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config()
app.use(express.json());
app.use(cookieParser());   // so that we can excess cookie easly

// root route 
app.get("/",(req,res)=>{
    res.send("hello world!");
})

// using middlewear for authentications 
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


app.listen(PORT,()=>{
    ConnectToDataBase()
    console.log(`server is running  on port ${PORT}`);
})