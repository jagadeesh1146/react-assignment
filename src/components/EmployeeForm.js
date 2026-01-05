import React, { useState, useEffect } from "react";

const EmployeeForm = ({ addEmployee, editingEmployee, updateEmployee }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    image: "",
    active: true, 
  });

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.gender) {
      alert("Please fill required fields");
      return;
    }

    if (editingEmployee) {
      updateEmployee(form);
    } else {
      addEmployee({ ...form, id: Date.now() });
    }

    setForm({
      name: "",
      gender: "",
      dob: "",
      image: "",
      active: true, // ✅ RESET
    });
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5>{editingEmployee ? "Edit Employee" : "Add Employee"}</h5>

      <input
        className="form-control mb-2"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        className="form-control mb-2"
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        type="date"
        className="form-control mb-2"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />

      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) =>
          setForm({
            ...form,
            image: URL.createObjectURL(e.target.files[0]),
          })
        }
      />

      {form.image && (
        <img src={form.image} alt="preview" width="60" className="mb-2" />
      )}

    
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={form.active}
          onChange={(e) =>
            setForm({ ...form, active: e.target.checked })
          }
        />
        <label className="form-check-label">Active</label>
      </div>

      <button className="btn btn-success mt-2">
        {editingEmployee ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default EmployeeForm;
