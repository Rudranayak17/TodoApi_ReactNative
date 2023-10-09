import express from "express";
import { addTask, forgetpassword, getMyProfile, login, logout, register, removeTask, resetpassword, updatePassword, updateProfile, updateTask, verify } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router=express.Router();


router.route("/register").post(register)
router.route("/verify").post(isAuthenticated ,verify)
router.route("/login").post( login)
router.route("/logout").get(logout )
router.route("/newtask").post(isAuthenticated,addTask )
router.route("/task/:taskId").get(isAuthenticated,updateTask).delete(isAuthenticated,removeTask )

router.route("/me").get(isAuthenticated,getMyProfile )
router.route("/updateprofile").put(isAuthenticated,updateProfile )
router.route("/updatepassword").put(isAuthenticated,updatePassword )
router.route("/forgetpassword").post( forgetpassword)
router.route("/resetpassword").put( resetpassword)




export default router