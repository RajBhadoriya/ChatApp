<<<<<<< HEAD
import express from "express";
import {signup, login, logout} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

// router.get("/logout",(req,res)=>{
//     res.send("Logout Route");
// });

router.post("/logout",logout);

=======
import express from "express";
import {signup, login, logout} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

// router.get("/logout",(req,res)=>{
//     res.send("Logout Route");
// });

router.post("/logout",logout);

>>>>>>> origin/main
export default router;