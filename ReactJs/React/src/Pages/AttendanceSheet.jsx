import React, { useState } from "react";

const AttendanceSheet = () => {
  // State to store attendance data
  const [attendanceData, setAttendanceData] = useState([]);

  // Function to handle marking attendance
  const markAttendance = (employeeId, date, status) => {
    // Check if the employee has already been marked for the selected date
    const existingAttendance = attendanceData.find(
      (attendance) =>
        attendance.employeeId === employeeId && attendance.date === date
    );

    // If the employee has already been marked, update the status
    if (existingAttendance) {
      setAttendanceData(
        attendanceData.map((attendance) =>
          attendance.employeeId === employeeId && attendance.date === date
            ? { ...attendance, status }
            : attendance
        )
      );
    } else {
      // If the employee has not been marked, add a new entry
      setAttendanceData([
        ...attendanceData,
        {
          employeeId,
          date,
          status
        }
      ]);
    }
  };

  // Render the table for attendance sheet
  return (
    <div className="container">
      <h2>Attendance Sheet</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through employees and render attendance rows */}
          {attendanceData.map((attendance, index) => (
            <tr key={index}>
              <td>{attendance.employeeId}</td>
              <td>{attendance.date}</td>
              <td>
                {/* Dropdown to mark attendance */}
                <select
                  value={attendance.status}
                  onChange={(e) =>
                    markAttendance(
                      attendance.employeeId,
                      attendance.date,
                      e.target.value
                    )
                  }
                >
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSheet;
