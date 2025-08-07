const app = express();
import { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
config();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connectDB();
});
