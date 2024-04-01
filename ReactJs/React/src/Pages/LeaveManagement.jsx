import React, { useState } from "react";

const LeaveManagement = () => {
  // Sample leave data (replace with your actual data)
  const [leaveData, setLeaveData] = useState([
    { id: 1, employeeName: "John Doe", leaveType: "Sick Leave", startDate: "2024-03-01", endDate: "2024-03-03", numberOfDays: 3, status: "Approved", reason: "Illness" },
    { id: 2, employeeName: "Jane Smith", leaveType: "Vacation", startDate: "2024-04-10", endDate: "2024-04-15", numberOfDays: 6, status: "Pending", reason: "Family vacation" },
    // Add more leave data as needed
  ]);

  return (
    <div className="container">
      <h2>Leave Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Number of Days</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.employeeName}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.numberOfDays}</td>
              <td>{leave.status}</td>
              <td>{leave.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveManagement;
