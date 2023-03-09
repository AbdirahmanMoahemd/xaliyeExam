import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MQuestionSchema = mongoose.Schema(
  {
    questions: [
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
        selectedIndex:{
            type: Number,
            default: -1
        },
        options:[
            {
                type : String,
            }
        ]
      },
    ],
  },
  {
    timestamps: true,
  }
);

MQuestionSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

MQuestionSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const MQuestion = mongoose.model("MQuestion", MQuestionSchema);

export default MQuestion;
