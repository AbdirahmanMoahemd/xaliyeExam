import express from "express";
import { getQuestions } from "../controllers/questionsController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getQuestions);


export default router;