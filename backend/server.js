import express from "express";
import userRouter from "./routes/route.js";
import cors from "cors";
import connectdb from "./db/dbConnect.js";
import dotenv from "dotenv";
dotenv.config();
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send(`The server is live at http://localhost:${PORT}`);
});

app.listen(PORT, async () => {
  console.log(`The server is live at http://localhost:${PORT} and connected`);
  // console.log(process.env.MONGO_URL);
  await connectdb();
});

export default app;
