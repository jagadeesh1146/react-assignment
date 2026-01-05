const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <>
      <button className="btn btn-secondary mb-2" onClick={() => window.print()}>
        Print
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Status</th> 
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center text-muted">
                No employees found
              </td>
            </tr>
          ) : (
            employees.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.image && <img src={e.image} width="40" alt="" />}</td>
                <td>{e.name}</td>
                <td>{e.gender}</td>
                <td>{e.dob}</td>

                
                <td>
                  {e.active ? (
                    <span className="badge bg-success">Active</span>
                  ) : (
                    <span className="badge bg-secondary">Inactive</span>
                  )}
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(e)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeTable;
