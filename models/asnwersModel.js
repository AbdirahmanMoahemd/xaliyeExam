import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AnswersSchema = mongoose.Schema(
  {
    name: { type: String },
    answers: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Answers = mongoose.model("Answers", AnswersSchema);

export default Answers;
