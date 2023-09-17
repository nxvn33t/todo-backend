import express from "express";
import userrouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors";

config({
   path: "./data/config.env",
}); 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
   origin:[process.env.FRONTEND_URL],
   method:["GET","POST","PUT","DELETE"],
   credentials:true,
})
);


app.use("/api/v1/user",userrouter);
app.use("/api/v1/task",taskRouter);


app.get("/", (req,res)=>{console.log("Ram Ram")});


// app.use((err,req,res,next)=>{}) 