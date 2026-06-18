import { Router } from "express";
import { applicationform } from "../controllers/application.controller.js";
import { applications } from "../controllers/applications.controller.js";
import { deleteApplication } from "../controllers/delete.controller.js";
import { applicationsByuid } from "../controllers/applications.controller.js";
import { updateApplication } from "../controllers/update.controler.js";

const router = Router()
router.route("/applicationform").post(applicationform)

router.route("/applications").get(applications)
router.route("/applicationsByuid").get(applicationsByuid)
router.route("/deleteApplication/:id").delete(deleteApplication)

router.route("/updateApplication/:id").patch(updateApplication)
export { router }