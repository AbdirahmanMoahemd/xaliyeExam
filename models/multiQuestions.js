import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MQuestionSchema = mongoose.Schema(
  {
    
        text: {
          type: String,
          required: true,
        },
        number: {
            type: Number,
            required: true,
            default: 1
        },
        options:[
            {
                type : String,
            }
        ]
      
  },
  {
    timestamps: true,
  }
);



const MQuestion = mongoose.model("MQuestion", MQuestionSchema);

export default MQuestion;
