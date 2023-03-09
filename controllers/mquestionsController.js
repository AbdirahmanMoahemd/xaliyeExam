import asyncHandler from "express-async-handler";
import MQuestion from "../models/multiQuestions.js";



export const getMquestions = asyncHandler(async (req, res) => {
    try {
      const mquestions = await MQuestion.find();
      
      res.json(mquestions);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
   
  });
  