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
        setDisplayModal(prop.displayModal)
        console.log(prop);
        // prop.displayModal = false;
    }, [msg, prop.emp.id])

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
        setDisplayModal(false);
        setBtnValue('Updated');
        prop.onChild(displayModal);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header text-center">Update Employee Details</div>
                    <div className="card-body">
                        <form onSubmit={updateEmployee}>
                            <div className="row d-flex justify-content-around align-content-between">
                                <div className="col-md-12 input-group mb-3">
                                    {/* <label htmlFor="empId">Employee Id</label>
                                    <input type="text"
                                        className="form-control"
                                        value={employee.id}
                                        disabled
                                        readonly
                                    >
                                    </input> */}
                                    <span className="input-group-text"
                                        id="empId"
                                    >
                                        Employee Id
                                    </span>
                                    <input type="text"
                                        className="form-control"
                                        value={employee.id}
                                        disabled
                                        readOnly
                                    />

                                </div>
                                <div className="col-md-12 input-group mb-3">
                                    {/* <label htmlFor="empName">Employee Name</label>
                                    <input type="text"
                                        className="form-control"
                                        value={employee.empName}
                                        onChange={(e) => setEmployee({...employee, empName: e.target.value}) }
                                    >
                                    </input> */}
                                    <span className="input-group-text">Name</span>
                                    <input type="text"
                                        className="form-control"
                                        value={employee.empName}
                                        onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-12 input-group mb-3">
                                    {/* <label htmlFor="empSalary">Salary</label>
                                    <input type="number"
                                        className="form-control"
                                        value={employee.empSalary}
                                        onChange={(e) => setEmployee({...employee, empSalary: e.target.value}) }
                                    >
                                    </input> */}
                                    <span className="input-group-text">Salary</span>
                                    <input type="number"
                                        className="form-control"
                                        value={employee.empSalary}
                                        onChange={(e) => setEmployee({ ...employee, empSalary: e.target.value })} />
                                </div>
                                <div className="col-md-12 d-grid gap-2 mb-3">
                                    <button
                                        className="btn btn-outline-primary"
                                        type="submit"
                                        id="btnSubmit"
                                    >
                                        {btnValue}
                                    </button>
                                </div>
                                {/* <div className="form-floating mb-3 col-md-4" hidden>
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
                                        value={employee.empSalary}
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
                                </div> */}
                            </div>
                            <div className="row d-flex justify-content-around align-content-between">
                                <span style={{ color: 'red', margin: '20px', display: msg.statusText.length == 0 ? 'none' : 'block' }}>Status Code: {msg.status} Status: {msg.statusText}</span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee;