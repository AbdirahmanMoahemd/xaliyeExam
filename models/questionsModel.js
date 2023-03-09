import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



const Questions = mongoose.model("Questions", QuestionSchema);

export default Questions;
