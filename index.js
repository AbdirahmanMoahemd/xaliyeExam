import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorHandler, notFound } from "./middlewares/errorMidlleware.js";
import connectDB from "./config/db2.js";
import colors from 'colors'
import userRoutes from "./routes/userRoutes.js";
import mquestionsRoutes from "./routes/mquestionsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";



dotenv.config();
connectDB();
//init server
const app = express();




app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/mquestions", mquestionsRoutes);
app.use("/api/questions", questionsRoutes);



app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`connected at port ${PORT}`));