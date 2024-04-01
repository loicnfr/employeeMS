import AdminModel from "../Models/Madmin.js";

const getAllAdmin = async (req, res) => {
  try {
    const AllAdmin = await AdminModel.find();
    res.status(200).json(AllAdmin);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      const NewAdmin = new AdminModel({ name, email, password });
      await NewAdmin.save();
      res.status(201).json(NewAdmin);
    } else {
      res.status(400).json({ msg: "email aready exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const DeleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const Admin = await AdminModel.findByIdAndDelete(id);
    Admin
      ? res.status(200).json({ msg: "deleted" })
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const UpdateAdmin = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const Admin = await AdminModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    Admin
      ? res.status(200).json(Admin)
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const AuthAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const Admin = await AdminModel.findOne({ email });

    Admin
      ? Admin.password === password
        ? res.status(200).json([{ msg: "successfull" }, Admin])
        : res.status(404).json({ msg: "email or password wrong" })
      : res.status(404).json({ msg: "email or password wrong" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getAllAdmin, addAdmin, DeleteAdmin, UpdateAdmin, AuthAdmin };
