import { Router } from "express";
import { applicationform } from "../controllers/application.controller.js";
import { applications } from "../controllers/applications.controller.js";
import { deleteApplication } from "../controllers/delete.controller.js";

const router = Router()
router.route("/applicationform").post(applicationform)

router.route("/applications").get(applications)
router.route("/deleteApplication/:id").delete(deleteApplication)


export { router }