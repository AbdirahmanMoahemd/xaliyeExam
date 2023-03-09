import asyncHandler from "express-async-handler";
import MAnswers from "../models/manswersModel.js";
import MQuestion from "../models/multiQuestions.js";



export const getMquestions = asyncHandler(async (req, res) => {
    try {
      const mquestions = await MQuestion.find();
      
      res.json(mquestions);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
   
  });

  export const createMAnswers = asyncHandler(async (req, res) => {
    let answer = new MAnswers({
      name: req.body.name,
      options: req.body.options,
    });
    answer = await answer.save();
  
    if (!answer) return res.status(400).send("the answer cannot be created!");
  
    res.send(answer);
  });
  
  