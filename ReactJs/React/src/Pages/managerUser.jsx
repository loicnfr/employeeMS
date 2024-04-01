import React, { useState } from "react";

const ManageEmployee = () => {
  // State to store the list of employees
  const [employees, setEmployees] = useState([]);

  // State to store employee data
  const [employeeData, setEmployeeData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    address: "",
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Function to handle adding an employee
  const handleAddEmployee = () => {
    if (!employeeData.firstName || !employeeData.lastName) return;

    setEmployees([...employees, { ...employeeData, id: Date.now() }]);
    setEmployeeData({
      id: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      mobileNumber: "",
      address: "",
    });
  };

  // Function to handle deleting an employee
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // Function to handle updating an employee
  const handleUpdateEmployee = (id, updatedData) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, ...updatedData } : employee
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h2>Manage Employees</h2>

          {/* Form to add an employee */}
          <div className="mt-3">
            <h3>Add Employee</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={employeeData.firstName}
                placeholder="First Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={employeeData.lastName}
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="gender"
                value={employeeData.gender}
                placeholder="Gender"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={employeeData.email}
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="mobileNumber"
                value={employeeData.mobileNumber}
                placeholder="Mobile Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="address"
                value={employeeData.address}
                placeholder="Address"
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddEmployee}>
              Add Employee
            </button>
          </div>

          {/* List of employees */}
          <div className="mt-5">
            <h3>Employees</h3>
            <ul className="list-group">
              {employees.map((employee) => (
                <li key={employee.id} className="list-group-item">
                  {employee.firstName} {employee.lastName} - {employee.gender} - {employee.email} - {employee.mobileNumber} - {employee.address}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() =>
                      handleUpdateEmployee(employee.id, {
                        firstName: "Updated Name",
                        lastName: "Updated Last Name",
                        gender: "Updated Gender",
                        email: "updated@example.com",
                        mobileNumber: "Updated Mobile Number",
                        address: "Updated Address",
                      })
                    }
                  >
                    Update
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageEmployee;
