import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/mongodb";

import movieRoutes from "./routes/movieRoutes";

const app = express();
app.use(cors());

const PORT = process.env.PORT;
const dbUri = process.env.DATABASE_URI || "";

// app.use(cors());

app.use("/movies", movieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1 style="color: aqua; font-size:8rem">Hello Express</h1>`);
});
connectDB(dbUri);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
