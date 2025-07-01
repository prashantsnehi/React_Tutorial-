import { useState, useEffect } from "react";
let ModelComponent = (prop) => {
    let [employee, setEmployee] = useState({ empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' });
    useEffect(() => {
        if(prop != null || prop != undefined) {
            setEmployee({ empName: prop.empName, empSalary: prop.empSalary })
        }
    },[msg]);

    let updateEmployee = () => {
        if(employee.empName == "" || employee.empSalary <= 0) {

        }
    }
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Employee</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={updateEmployee(employee)}>
                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="empName"
                                    placeholder="employee name"
                                    value={prop.empName}
                                    onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
                                />
                                <label for="empName">Employee Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="empSalary"
                                    placeholder="Salary"
                                    value={prop.empSalary}
                                    onChange={(e) => setEmployee({ ...employee, empSalary: e.target.value })}
                                />
                                <label for="empSalary">Salary</label>
                            </div>
                            <span style={{ color: 'red', margin: '20px', display: msg.statusText.length == 0 ? 'none' : 'block' }}>Status Code: {msg.status} <br />Status: {msg.statusText}</span>
                            <div className="d-grid gap-2 mt-4">
                                <input className="btn btn-primary"
                                    id="btnSubmit"
                                    type="submit"
                                    value="Submit">
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={(event) => updateEmployee(event, employee)}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelComponent;