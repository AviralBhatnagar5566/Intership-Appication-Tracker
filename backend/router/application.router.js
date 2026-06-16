import { Router } from "express";
import { applicationform } from "../controllers/application.controller.js";

const router = Router()
router.route("/applicationform").post(applicationform)


export { router }