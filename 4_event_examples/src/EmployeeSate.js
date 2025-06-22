import { useState } from "react";

let EmployeeState = () => {
    let [employee, setEmployee] = useState({
        name: 'John Doe',
        age: '24',
        department: 'Marketing',
        salary: '70000'
    });

    let updateEmployee = () => {
        setEmployee({
            name: 'Jane Smith',
            age: '30',
            department: 'Sales',
            salary: '80000'
        });
    };

    let updateEmployeeSalary = () => {
        setEmployee({
            ...employee,
            salary: '70000'
        });
    };

    let updateEmployeeDepartment = () => {
        setEmployee({
            ...employee,
            department: 'Marketing'
        });
    };

    return (
        <div>
            <h1>Employee State Example</h1>
            <h3>Employee Details</h3>
            <table border="1" width="90%" cellPadding="10" style={{ margin: 'auto' }}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{employee.age}</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>{employee.department}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>{employee.salary}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={updateEmployee}>Update Employee</button>
            <button onClick={updateEmployeeSalary}>Update Salary</button>
            <button onClick={updateEmployeeDepartment}>Update Department</button>
        </div>
    );
}

export default EmployeeState;