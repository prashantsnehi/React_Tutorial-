import axios from "axios";
import { useState, useEffect } from "react";

let AddEmployeeComponent = () => {
    let [employee, setEmployee] = useState({ empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' });
    let [btnValue, setBtnValue] = useState('Submit')
    let url = 'http://localhost:3000/employees';

    useEffect(() => {
        // addOrUpdateEmployee()
    }, [msg]);

    let addOrUpdateEmployee = (event) => {
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
                            <div className="row d-flex justify-content-around align-content-center">
                                <div className="col-md-12 mb-4 input-group">
                                    {/* <label htmlFor="empName" className="form-label">Employee Name</label> */}
                                    <span className="input-group-text">Name</span>
                                    <input type="text"
                                        className="form-control"
                                        id="empName"
                                        placeholder="employee name"
                                        value={employee.empName}
                                        onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-12 mb-4 input-group">
                                    {/* <label htmlFor="empSalary" className="form-label">Salary</label> */}
                                    <span className="input-group-text">Salary</span>
                                    <input type="number"
                                        className="form-control"
                                        id="empSalary"
                                        placeholder="salary"
                                        value={employee.empSalary}
                                        onChange={(e) => setEmployee({ ...employee, empSalary: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-12 d-grid gap-2 mb-4">
                                    <input className="btn btn-outline-primary"
                                        id="btnSubmit"
                                        type="submit"
                                        value={btnValue}>
                                    </input>
                                </div>
                            </div>
                            {/* <div className="row d-flex justify-content-around align-content-end">
                                <div className="form-floating m-auto col-md-4">
                                    <input type="text"
                                        className="form-control"
                                        id="empName"
                                        placeholder="employee name"
                                        value={employee.empName}
                                        onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
                                    />
                                    <label for="empName">Employee Name</label>
                                </div>
                                <div className="form-floating m-auto col-md-4">
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
                                <div className="d-grid gap-2 m-auto col-md-4">
                                    <input className="btn btn-outline-primary"
                                        id="btnSubmit"
                                        type="submit"
                                        value={btnValue}>
                                    </input>
                                </div>
                            </div> */}
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <span>Status: </span> */}
                                <span style={{ color: 'red', marginLeft: '20px'}}>Status Code: {msg.status} Status: {msg.statusText}</span>
                            </div>
                            {/* <div className="col-md-6 m-auto d-grid gap-2">
                                <input className="btn btn-outline-primary"
                                    id="btnSubmit"
                                    type="submit"
                                    value={btnValue}>
                                </input>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;