import asyncHandler from "express-async-handler";
import Answers from "../models/asnwersModel.js";
import Questions from "../models/questionsModel.js";



export const getQuestions = asyncHandler(async (req, res) => {
    try {
      const questions = await Questions.find();
      
      res.json(questions);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
   
  });

  export const createAnswers = asyncHandler(async (req, res) => {
    let answer = new Answers({
      name: req.body.name,
      answers: req.body.answers,
    });
    answer = await answer.save();
  
    if (!answer) return res.status(400).send("the answer cannot be created!");
  
    res.send(answer);
  });
  