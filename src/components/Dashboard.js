import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

const Dashboard = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  const updateEmployee = (emp) => {
    setEmployees(
      employees.map((e) => (e.id === emp.id ? emp : e))
    );
    setEditing(null);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete employee?")) {
      setEmployees(employees.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Employee Dashboard</h3>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>

      <EmployeeForm
        addEmployee={addEmployee}
        editing={editing}
        updateEmployee={updateEmployee}
      />

      <EmployeeTable
        employees={employees}
        onEdit={setEditing}
        onDelete={deleteEmployee}
      />
    </div>
  );
};

export default Dashboard;
