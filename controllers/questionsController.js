import asyncHandler from "express-async-handler";
import Questions from "../models/questionsModel.js";



export const getQuestions = asyncHandler(async (req, res) => {
    try {
      const questions = await Questions.find();
      
      res.json(questions);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
   
  });
  