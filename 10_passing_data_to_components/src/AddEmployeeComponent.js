import axios from "axios";
import { useState, useEffect } from "react";

let AddEmployeeComponent = () => {
    let [employee, setEmployee] = useState({ empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' });
    let [btnValue, setBtnValue] = useState('Add Employee')
    let url = 'http://localhost:3000/employees';

    let addOrUpdateEmployee = (event) => {
        event.preventDefault();
        if (employee.empName == "" || employee.empSalary <= 0) {
            setMsg({ status: 500, statusText: 'Invalid Data' });
            return;
        }
        axios.post(url, employee)
            .then(response => {
                setMsg({ status: response.status, statusText: response.statusText });
                setEmployee({ empName: '', salary: 0 })
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header text-center">Add New Employee</div>
                    <div className="card-body">
                        <form onSubmit={addOrUpdateEmployee}>
                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="empName"
                                    placeholder="employee name"
                                    value={employee.empName}
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
                                    value={employee.salary}
                                    onChange={(e) => setEmployee({ ...employee, empSalary: e.target.value })}
                                />
                                <label for="empSalary">Salary</label>
                            </div>
                            <span style={{ color: 'red', margin: '20px', display: msg.statusText.length == 0 ? 'none' : 'block' }}>Status Code: {msg.status} <br />Status: {msg.statusText}</span>
                            <div className="d-grid gap-2 mt-4">
                                <input className="btn btn-outline-primary"
                                    id="btnSubmit"
                                    type="submit"
                                    value={btnValue}>
                                </input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;