import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;
