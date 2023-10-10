import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(todoRoutes); 

mongoose.connect(process.env.MONGODB_URL as string)
  .then(() => console.log('CONNECTED TO MONGO DB!'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
