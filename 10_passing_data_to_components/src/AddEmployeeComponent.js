import axios from "axios";
import { useState, useEffect } from "react";

let AddEmployeeComponent = () => {
    let [employee, setEmployee] = useState({ empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' });
    let [btnValue, setBtnValue] = useState('Add Employee')
    let url = 'http://localhost:3000/employees';

    useEffect(() => {
        // addOrUpdateEmployee()
    }, [msg]);

    let addOrUpdateEmployee = (event) => {
        debugger
        event.preventDefault();
        if (employee.empName == "" || employee.empSalary <= 0) {
            setMsg({ status: 500, statusText: 'Invalid Data' });
            return;
        }
        axios.post(url, employee)
            .then(response => {
                console.log(response);
                console.log(employee);
                setMsg({ status: response.status, statusText: response.statusText });
                console.log(msg);
            })
            .catch(error => console.log(error));
        setEmployee({ empName: '', empSalary: 0 });
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header text-center">Add New Employee</div>
                    <div className="card-body">
                        <form onSubmit={addOrUpdateEmployee}>
                            {/* <div className="row d-flex justify-content-around align-content-center">
                                <div class="mb-12 col-md-4">
                                    <label for="empName" class="form-label">Employee Name</label>
                                    <input type="text" class="form-control" id="empName" placeholder="name" />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="empSalary" class="form-label">Another label</label>
                                    <input type="number" class="form-control" id="empSalary" placeholder="salary" />
                                </div>
                                <div className="mb-3 col-md-4 d-grid gap-2">
                                    <input className="btn btn-outline-primary"
                                    id="btnSubmit"
                                    type="submit"
                                    value={btnValue}>
                                </input>
                                </div>
                            </div> */}
                            <div className="row d-flex justify-content-around align-content-center">
                                <div className="form-floating mb-3 col-md-4">
                                    <input type="text"
                                        className="form-control"
                                        id="empName"
                                        placeholder="employee name"
                                        value={employee.empName}
                                        onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
                                    />
                                    <label for="empName">Employee Name</label>
                                </div>
                                <div className="form-floating mb-4 col-md-4">
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
                                <div className="d-grid gap-2 mb-4 col-md-4">
                                    <input className="btn btn-outline-primary"
                                        id="btnSubmit"
                                        type="submit"
                                        value={btnValue}>
                                    </input>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <span style={{ color: 'red', margin: '20px', display: msg.statusText.length == 0 ? 'none' : 'block' }}>Status Code: {msg.status} Status: {msg.statusText}</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;