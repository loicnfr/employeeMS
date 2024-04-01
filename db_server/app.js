import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import employeeRoute from "./Routes/Remployee.js";
import AdminRoute from "./Routes/Radmin.js";

const app = express();
const PORT = 3000;
const dbUrl = "mongodb://localhost:27017/employeems";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose
  .connect(dbUrl)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`API is running on PORT http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("API Started here"));

app.use("/employee", employeeRoute);
app.use("/admin", AdminRoute);
