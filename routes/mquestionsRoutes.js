import express from "express";
import { createMAnswers, getMquestions } from "../controllers/mquestionsController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getMquestions).post(protect, createMAnswers);


export default router;