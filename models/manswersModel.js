import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MAnswersSchema = mongoose.Schema(
  {
   
        name: { type: String },
        options: [
          {
            type: String,
          },
        ],
      
    
  },
  {
    timestamps: true,
  }
);

const MAnswers = mongoose.model("MAnswers", MAnswersSchema);

export default MAnswers;
