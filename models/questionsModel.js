import mongoose from "mongoose";
import bcrypt from "bcryptjs";



const QuestionSchema = mongoose.Schema(
  {
    questions: [
        {
      type: String,
      required: true,
    },]
    
    
  },
  {
    timestamps: true,
  }
);

QuestionSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

QuestionSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
