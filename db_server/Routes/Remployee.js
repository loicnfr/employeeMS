import express from "express";
import {
  AuthEmployee,
  DeleteEmployee,
  UpdateEmployee,
  addEmployee,
  getAllEmployees,
} from "../Controllers/Cemployee.js";

const Route = express.Router();

Route.get("/", getAllEmployees);
Route.post("/", addEmployee);
Route.delete("/:id", DeleteEmployee);
Route.patch("/:id", UpdateEmployee);
Route.post("/Auth", AuthEmployee);

export default Route;
