import axios from "axios";
import { useState, useEffect } from "react";

let UpdateEmployee = (prop) => {
    let [employee, setEmployee] = useState({ id: '', empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' });
    let [btnValue, setBtnValue] = useState('Update Employee');
    let [displayModal, setDisplayModal] = useState(false);
    let url = 'http://localhost:3000/employees';

    useEffect(() => {
        setEmployee({ id: prop.emp.id, empName: prop.emp.empName, empSalary: prop.emp.empSalary });
        console.log(prop);
        // prop.displayModal = false;
    }, [msg])

    let updateEmployee = (event) => {
        event.preventDefault();
        if (employee.empName == "" || employee.empSalary <= 0) {
            setMsg({ status: 500, statusText: 'Invalid Data' });
            return;
        }
        axios.put(`${url}/${employee.id}`, employee)
            .then(response => {
                setMsg({ status: response.status, statusText: response.statusText });
                setEmployee({ empName: '', salary: 0 })
            })
            .catch(error => console.log(error));
        prop.onChild(false);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header text-center">Update Employee Details</div>
                    <div className="card-body">
                        <form onSubmit={updateEmployee}>
                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control"
                                    id="id"
                                    placeholder="employee Id"
                                    value={employee.id}
                                    onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
                                    readOnly
                                />
                                <label for="empName">Employee Id</label>
                            </div>
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
                                    value={employee.empSalary}
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

export default UpdateEmployee;