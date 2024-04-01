import EmployeeModel from "../Models/Memployee.js";

const getAllEmployees = async (req, res) => {
  try {
    const AllEmployee = await EmployeeModel.find();
    res.status(200).json(AllEmployee);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addEmployee = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const employee = await EmployeeModel.findOne({ email });
    if (!employee) {
      const NewEmployee = new EmployeeModel({ name, email, password });
      await NewEmployee.save();
      res.status(201).json(NewEmployee);
    } else {
      res.status(400).json({ msg: "email aready exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const DeleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await EmployeeModel.findByIdAndDelete(id);
    employee
      ? res.status(200).json({ msg: "deleted" })
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const UpdateEmployee = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    employee
      ? res.status(200).json(employee)
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const AuthEmployee = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await EmployeeModel.findOne({ email });

    employee
      ? employee.password === password
        ? res.status(200).json([{ msg: "successfull" }, employee])
        : res.status(404).json({ msg: "email or password wrong" })
      : res.status(404).json({ msg: "email or password wrong" });
  } catch (error) {
    res.status(500).json(error);
  }
};
export {
  getAllEmployees,
  addEmployee,
  DeleteEmployee,
  UpdateEmployee,
  AuthEmployee,
};
