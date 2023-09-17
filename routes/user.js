import express from "express";
import { User } from "../models/user.js";
import { alluser, createuser, getmyprofile , login, logout,  } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();  

// router.get("/", printhome); 

router.get("/all",alluser); 

router.post("/new", createuser);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated,getmyprofile);

// router.put("/userid/:id",updateuser);

// router.delete("/userid/:id",deleteuser);

export default router;