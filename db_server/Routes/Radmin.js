import express from "express";
import {
  AuthAdmin,
  DeleteAdmin,
  UpdateAdmin,
  addAdmin,
  getAllAdmin,
} from "../Controllers/Cadmin.js";
const Route = express.Router();

Route.get("/", getAllAdmin);
Route.post("/", addAdmin);
Route.delete("/:id", DeleteAdmin);
Route.patch("/:id", UpdateAdmin);
Route.post("/Auth", AuthAdmin);

export default Route;
