import React, { useState, useEffect } from "react";

const EmployeeForm = ({ addEmployee, editing, updateEmployee }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.gender) {
      alert("Fill required fields");
      return;
    }

    if (editing) {
      updateEmployee(form);
    } else {
      addEmployee({ ...form, id: Date.now() });
    }

    setForm({ name: "", gender: "", dob: "", state: "", active: true, image: "" });
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5>{editing ? "Edit" : "Add"} Employee</h5>

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
          setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) })
        }
      />

      {form.image && <img src={form.image} alt="" width="60" />}

      <button className="btn btn-success mt-2">
        {editing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default EmployeeForm;
