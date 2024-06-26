// packages 
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from "path"

// files 
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import ConnectToDataBase from "./DB/ConnectToDataBase.js";
import { app, server } from "./socket/socket.js"
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config()
app.use(express.json());
app.use(cookieParser());   // so that we can excess cookie easly

// root route 

// using middlewear for authentications 
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"Frontend","dist","index.html"));
})

server.listen(PORT,()=>{
    ConnectToDataBase()
    console.log(`server is running  on port ${PORT}`);
})