import express from "express";
import { getMquestions } from "../controllers/mquestionsController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getMquestions);


export default router;