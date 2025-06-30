import {useState, useEffect} from 'react';

let AddEmployee = () => {
    let [msg, setMsg] = useState('');
    let [employees, setEmployees] = useState([]);
    let url = 'http://localhost:3000/employee';

    

    return (
         <div className="row d-flex mb-2 justify-content-center align-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Add New Employee</div>
                    <div className="card-body"></div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;