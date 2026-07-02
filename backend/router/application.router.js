import { Router } from "express";
import { applicationform } from "../controllers/application.controller.js";
import { applications } from "../controllers/applications.controller.js";
import { deleteApplication } from "../controllers/delete.controller.js";
import { applicationsByuid } from "../controllers/applications.controller.js";
import { updateApplication } from "../controllers/update.controller.js";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router = Router()
router.route("/registerUser").post(registerUser)

router.route("/loginUser").post(loginUser)

router.route("/applicationform").post(applicationform)

router.route("/applications").get(applications)
router.route("/applicationsByuid/:id").get(applicationsByuid)
router.route("/deleteApplication/:id").delete(deleteApplication)

router.route("/updateApplication/:id").patch(updateApplication)


export { router }