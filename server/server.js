import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import "express-async-errors";

// routes
import authRoutes from "./routes/auth.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";

//middleware
import notFoundMiddleWare from "./middlewares/notFound.js";
import errorHandlerMiddleWare from "./middlewares/errorHandler.js";

dotenv.config();
const port = process.env["PORT"] || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/job", jobsRoutes);

// middleware
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env["MONGODB"]);
    console.log("Connected to mongodb!");
    app.listen(port, () => {
      console.log(`App is listening on port ${port}!`);
    });
  } catch (e) {
    console.log(e);
  }
};

await start();
