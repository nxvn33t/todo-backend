// import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const alluser = async (req, res) => {

};
export const createuser = async (req, res) => {
   const { name, email, password } = req.body;

   let user = await User.findOne({ email });

   if (user) return res.status(404).json({
      success: false,
      Message: "User already Exist",
   });
   const hashpass = await bcrypt.hash(password, 10);

   user = await User.create({ name, email, password: hashpass });

   sendCookie(user, res, "Registered Sucessfully", 201);

};
export const login = async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email }).select("+password");

   if (!user) return res.status(404).json({
      success: false,
      Message: "Invalid Credentials",
   });

   const isMatch = await bcrypt.compare(password, user.password)

   if (!isMatch) return res.status(404).json({
      success: false,
      Message: "Invalid Credentials",
   });

   sendCookie(user, res, `Welcome Back, ${user.name}`, 200)
};
export const getmyprofile = (req, res) => {

   res.status(200).json({
      sucess: true,
      user:req.user,
   });
};

export const logout =(req,res)=>{
   res.status(200).cookie("token","",{expires: new Date(Date.now()),
      sameSite:process.env.NODE_ENV== "Development"?"lax" : "none",
      secure: process.env.NODE_ENV== "Development"? false :true,

   }).json({
      sucess: true,
      user:req.user,
   });
};
