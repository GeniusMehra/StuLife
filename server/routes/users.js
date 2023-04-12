import { Router } from "express";
import { login, newUser } from "../controllers/users.js";

const router = Router()

router.route("/new").post(newUser)

router.route("/login").post(login)

export default router