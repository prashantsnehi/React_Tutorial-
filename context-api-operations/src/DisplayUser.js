import { useContext, useState } from "react";
import UserContext from "./UserContext";

let DisplayUser = () => {
    let userContext = useContext(UserContext);
    // let [user,setUser] = useState();
    let deleteUser = (user) => {
        console.log(user);
        // setUser(payload);
        userContext.displatchUser('DEL_USER', user);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Users</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Roll Number</th>
                                            <th>Name</th>
                                            <th>Father Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userContext.users.length === 0 ? (
                                                <tr><td colSpan={5}><span className="text-danger">No Data Found</span></td></tr>
                                            ) : (
                                                userContext.users.map((user, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.class}</td>
                                                        <td>{user.section}</td>
                                                        <td>{user.rollNumber}</td>
                                                        <td>{user.fname} {user.lastName}</td>
                                                        <td>{user.fatherName}</td>
                                                        <td>
                                                            <a className="btn btn-danger"
                                                                onClick={(e) => deleteUser(user)}
                                                                href="#"
                                                            >
                                                                <i className="bi bi-trash3-fill"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">Displaying list of available users</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayUser;