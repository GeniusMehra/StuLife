import { Router } from "express";
import { createNew, getAll, getByCollege, getByCollegeAndDepartment, getByCollegeAndDepartmentEarlier, getByDepartment } from "../controllers/placements.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=Router()

router.route("/all").get( getAll)

router.route("/add").post(createNew)

router.route("/gbc").get( getByCollege)

router.route("/gbd").get( getByDepartment)

router.route("/gbcad").get( getByCollegeAndDepartment)

router.route("/gbcade").get(isAuthenticated, getByCollegeAndDepartmentEarlier)

export default router