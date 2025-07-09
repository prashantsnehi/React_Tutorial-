import { useState, useEffect } from "react";
import axios from "axios";
import AddEmployeeComponent from "./AddEmployeeComponent";
import UpdateEmployee from "./UpdateEmployee";

let ListEmployees = () => {
    let [employees, setEmployees] = useState([]);
    let [employee, setEmployee] = useState({ empName: '', empSalary: 0 });
    let [employeeToUpdate, setEmployeeToUpdate] = useState({ id: '', empName: '', empSalary: 0 });
    let [msg, setMsg] = useState({ status: '', statusText: '' })
    let [displayModal, setDisplayModal] = useState(false);
    let url = 'http://localhost:3000/employees'
    useEffect(() => {
        debugger
        getEmployees();
    }, [msg, displayModal]);

    let getEmployees = () => {
        axios.get(url)
            .then(response => {
                setEmployees(response.data);
                setMsg({ status: response.status, statusText: response.statusText })
            })
            .catch(error => console.log(error))
    }

    let deleteEmployee = (event, emp) => {
        event.preventDefault();
        setEmployeeToUpdate({ id: '', empName: '', empSalary: 0 });
        setDisplayModal(false);
        axios.delete(`${url}/${emp.id}`)
            .then(response => {
                setMsg({ status: response.status, statusText: response.statusText });
                setEmployee({ empName: '', empSalary: 0 });
            })
            .catch(error => console.log(error))
    }

    let updateEmployee = (event, emp) => {
        event.preventDefault();
        console.log(emp)
        setEmployeeToUpdate(emp);
        if(displayModal) {
            setDisplayModal(false)
        }

        setDisplayModal(true);
        
        // if (emp.empName == "" || emp.empSalary <= 0) {
        //     setMsg({ status: 500, statusText: 'Invalid Data' });
        //     return;
        // }

        // axios.put(`${url}/${emp.id}`, emp)
        //     .then(response => {
        //         setMsg({ status: response.status, statusText: response.statusText });
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         setMsg({ status: error.status, statusText: error.statusText });
        //         console.log(error);
        //     })
    }

    let handleChildData = (dataFromChild) => {
        setDisplayModal(dataFromChild);
    }

    return (
        <div className="row">
            <div className="col-md-3 mb-3">
                <div className="row mb-3">
                    <div className="col-md-12">
                        {displayModal ? <UpdateEmployee emp={employeeToUpdate} onChild={handleChildData} display={displayModal} /> : <AddEmployeeComponent />}
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <Test />
                    </div>
                </div> */}
            </div>
            <div className="col-md-9">
                <div className="card rounded">
                    <div className="card-header text-center">Employee List</div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-responsive overflow-x-scroll">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th style={{ width: '10%' }}>Sr. No.</th>
                                    <th style={{ width: '10%' }}>Emp Id</th>
                                    <th style={{ width: '40%' }}>Employee Name</th>
                                    <th style={{ width: '10%' }}>Salary</th>
                                    <th style={{ width: '10%' }}>Update</th>
                                    <th style={{ width: '10%' }}>View</th>
                                    <th style={{ width: '10%' }}>Delete</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    employees.map((emp, index) =>
                                        <tr key={emp.id} style={{ textAlign: 'center' }}>
                                            <td>{index + 1}</td>
                                            <td>{emp.id}</td>
                                            <td>{emp.empName}</td>
                                            <td>{emp.empSalary}</td>
                                            <td>
                                                <a href="#"
                                                    className="btn btn-outline-info"
                                                    onClick={(event) => {
                                                        updateEmployee(event, emp);
                                                    }}>
                                                    <i className="bi bi-person-vcard-fill"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#"
                                                    className="btn btn-outline-secondary">
                                                    <i className="bi bi-person-vcard-fill"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#"
                                                    className="btn btn-outline-danger"
                                                    onClick={(event) => deleteEmployee(event, emp)}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployees;