import { useState, useEffect } from "react";
import axios from 'axios';

let HomeComponent = () => {
    let [addStatus, setAddStatus] = useState({ status: '', statusText: '' });
    let [fetchStatus, setFetchStatus] = useState({ status: '', statusText: '' });
    let [employees, setEmployees] = useState([]);
    let [employee, setEmployee] = useState({ empName: '', salary: 0 });
    let [showAdd, setShowAdd] = useState(false);
    let [btnValue, setBtnValue] = useState('Store Employee');
    let url = 'http://localhost:3000/employees';

    useEffect(() => {
        // document.getElementById('empName').focus();
        axios.get(url)
            .then(response => {
                setFetchStatus({ status: response.status, statusText: response.statusText });
                setEmployees(response.data)
            })
            .catch(error => {
                console.log(error);
                setFetchStatus(error.status);
            })

    }, [addStatus, fetchStatus]);

    let addNewEmployee = (event) => {
        event.preventDefault();
        setAddStatus({ status: '', statusText: '' });
        if (employee.empName.length === 0 || employee.salary === 0) {
            setAddStatus({ status: 500, statusText: 'Required parameters missing' });
            return;
        }

        if (btnValue == 'Store Employee') {
            axios.post(url, employee)
                .then(response => {
                    console.log(response);
                    setAddStatus({ status: response.status, statusText: response.statusText })
                })
                .catch(error => console.log(error));
        } else {
            axios.put(`${url}/${employee.id}`, employee)
                .then(response => {
                    console.log(response);
                    setFetchStatus({ status: response.status, statusText: response.statusText })
                })
                .catch(error => console.log(error));
            setBtnValue('Store Employee');
        }

        setEmployee({ empName: '', salary: 0 })
        document.getElementById('empName').focus();
    }

    let deleteEmployee = (event, id) => {
        // alert(`Id is ${id}`)
        setAddStatus({ status: '', statusText: '' });
        axios.delete(`${url}/${id}`)
            .then(response => {
                console.log(response);
                setFetchStatus({ status: response.status, statusText: response.statusText })
            })
            .catch(error => console.log(error))
    }

    let updateEmployee = (event, employeeToUpdate) => {
        document.getElementById('exampleModal').removeAttribute('data-bs-dismiss','modal')
        event.preventDefault();
        if (employeeToUpdate.empName == '' || employeeToUpdate.salary <= 0) {
            setAddStatus({ status: 500, statusText: 'invalid data' });
            return;
        }

        axios.put(`${url}/${employee.id}`, employee)
            .then(response => {
                console.log(response);
                setFetchStatus({ status: response.status, statusText: response.statusText });
            })
            .then(result => document.getElementById('exampleModal').setAttribute('data-bs-dismiss','modal'))
            .catch(error => console.log(error));
    }

    let employeeToUpdate = (event, employeeToUpdate) => {
        setBtnValue('Update Employee');
        setEmployee(employeeToUpdate);
    }

    return (
        <div className="row d-flex mb-2 justify-content-center align-content-center">
            <div className="col-md-3">
                {/* <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="card-header">Add New Employee</div>
                    <div className="card-body"> */}
                <form onSubmit={addNewEmployee}>
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
                            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                        />
                        <label for="empSalary">Salary</label>
                    </div>
                    <span style={{ color: 'red', margin: '20px', display: addStatus.statusText.length == 0 ? 'none' : 'block' }}>Status Code: {addStatus.status} <br />Status: {addStatus.statusText}</span>
                    <div className="d-grid gap-2 mt-4">
                        <input className="btn btn-primary"
                            id="btnSubmit"
                            type="submit"
                            value={btnValue}>
                        </input>
                    </div>
                </form>
                {/* </div>
                </div> */}
            </div>
            <div className="col-md-9">
                {/* <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="card-header">Listing Employees</div>
                    <div className="card-body"> */}
                <table className="table table-bordered table-striped">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            employees.map(e =>
                                <tr key={e.id} style={{ textAlign: 'center' }}>
                                    <td style={{ width: '10%' }}>{e.id}</td>
                                    <td style={{ width: '30%' }}>{e.empName}</td>
                                    <td>$ {e.salary}</td>
                                    <td>
                                        <div className="btn-group"
                                            role="group"
                                            aria-label="Basic example">
                                            <button type="button"
                                                className="btn btn-primary"
                                                onClick={(event) => employeeToUpdate(event, e)}>
                                                Update
                                            </button>
                                            <button type="button"
                                                className="btn btn-info"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={(event) => employeeToUpdate(event, e)}
                                            >
                                                View
                                            </button>
                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={(event) => deleteEmployee(event, e.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <span style={{ color: 'red', margin: '20px', display: fetchStatus.statusText.length == 0 ? 'none' : 'block' }}>
                    Status Code: {fetchStatus.status} Status: {fetchStatus.statusText}
                </span>
                {/* </div>
                </div> */}
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5"
                                id="exampleModalLabel">
                                View Employee
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">Selected Employee</div>
                                        <div className="card-body">
                                            <div class="mb-3">
                                                <label
                                                    for="exampleFormControlInput1"
                                                    class="form-label">Employee Name
                                                </label>
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="name@example.com"
                                                    value={employee.empName}
                                                    onChange={(event) => setEmployee({ ...employee, empName: event.target.value })}
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="exampleFormControlTextarea1"
                                                    className="form-label">
                                                    Salary
                                                </label>
                                                <input className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    value={employee.salary}
                                                    onChange={(event) => setEmployee({ ...employee, salary: event.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={(event) => updateEmployee(event, employee)}
                            >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;