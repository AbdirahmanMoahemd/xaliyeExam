import express from "express";
import { createAnswers, getQuestions } from "../controllers/questionsController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getQuestions).post(createAnswers);


export default router;