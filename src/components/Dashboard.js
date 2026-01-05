import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../common/AuthContext";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  //  Load employees from localStorage on first render
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [editingEmployee, setEditingEmployee] = useState(null);

  //  Search & Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  //  Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  //  Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  //  Add employee
  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  //  Update employee
  const updateEmployee = (emp) => {
    setEmployees(
      employees.map((e) => (e.id === emp.id ? emp : e))
    );
    setEditingEmployee(null);
  };

  //  Delete employee
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((e) => e.id !== id));
    }
  };

  
  const resetFilters = () => {
    setSearchTerm("");
    setGenderFilter("all");
    setStatusFilter("all");
  };

  
  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGender =
      genderFilter === "all" || emp.gender === genderFilter;

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && emp.active) ||
      (statusFilter === "inactive" && !emp.active);

    return matchesName && matchesGender && matchesStatus;
  });

  return (
    <div className="container mt-4">
    
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Employee Dashboard</h3>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      
      <div className="row mb-3">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="all">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="col-md-3">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={resetFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/*  Employee Form */}
      <EmployeeForm
        addEmployee={addEmployee}
        editingEmployee={editingEmployee}
        updateEmployee={updateEmployee}
      />

      {/*  Employee Table */}
      <EmployeeTable
        employees={filteredEmployees}
        onEdit={setEditingEmployee}
        onDelete={deleteEmployee}
      />
    </div>
  );
};

export default Dashboard;
