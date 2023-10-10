import express, { urlencoded } from "express";
import User from "./routers/user.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
export const app= express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(fileUpload({
    limits:{fileSize:50*1024*1024},
    useTempFiles:true
}))
app.use(cors({
    origin:[process.env.FONTEND_URL],
    methods:['GET', 'POST','PUT','DELETE'],
    credentials:true    
}))
app.use("/api/v1",User)

app.get("/", (req, res) => {
  res.send("Server is working");
});
