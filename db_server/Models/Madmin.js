import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("admin", AdminSchema);

export default AdminModel;
