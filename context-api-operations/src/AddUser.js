import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
let AddUser = () => {
    let [user, setUser] = useState({ fname: '', lastName: '', fatherName: '', rollNumber: '', class: '', section: '' });
    // let [user, setUser] = useState({ name: '', age: 0 });
    let contextRef = useContext(UserContext);
    let [validate, setValidate] = useState(false);

    let addUser = (event) => {
        event.preventDefault();
        // const form = event.currentTarget;
        // if(form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // setValidate(true);
        console.log(user);
        contextRef.displatchUser("ADD_USER", user);
        setUser({ fname: '', lastName: '', fatherName: '', rollNumber: '', class: '', section: '' });
        document.getElementById('class').focus();
    }

    useEffect(() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    },[validate, user]);
    
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Add User</div>
                    <div className="card-body">
                        {/* <form onSubmit={addUser}>
                            <div className="row mb-4">
                                <div className="col">
                                    <label htmlFor='fname'>Name</label>
                                    <input type="text"
                                        id="fname"
                                        className="form-control"
                                        placeholder="enter name"
                                        value={user.fname}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor='age'>Age</label>
                                    <input type="number"
                                        id="age"
                                        className="form-control"
                                        placeholder="age"
                                        onChange={(e) => setUser({ ...user, age: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col d-grid gap-2">
                                    <button className="btn btn-primary"
                                        type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form> */}
                        <form className="row g-3 needs-validation"
                            onSubmit={addUser}
                            noValidate>
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <label htmlFor='class' className="form-label">Class</label>
                                    <input type="text"
                                        id="class"
                                        className="form-control"
                                        placeholder="Class"
                                        value={user.class}
                                        onChange={(e) => setUser({ ...user, class: e.target.value })}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please enter class.</div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor='section' className="form-label">Section</label>
                                    <input type="text"
                                        id="section"
                                        className="form-control"
                                        placeholder="Section"
                                        value={user.section}
                                        onChange={(e) => setUser({ ...user, section: e.target.value })}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please section.</div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor='rnumber' className="form-label">Roll Number</label>
                                    <input type="text"
                                        id="rnumber"
                                        className="form-control"
                                        value={user.rollNumber}
                                        onChange={(e) => setUser({ ...user, rollNumber: e.target.value })}
                                        placeholder="roll number"
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please roll number.</div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label htmlFor='fname' className="form-label">First Name</label>
                                    <input type="text"
                                        id="fname"
                                        className="form-control"
                                        placeholder="first name"
                                        value={user.fname}
                                        onChange={(e) => setUser({ ...user, fname: e.target.value })}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please first name.</div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor='lname' className="form-label">Last Name</label>
                                    <input type="text"
                                        id="lname"
                                        className="form-control"
                                        value={user.lastName}
                                        placeholder="last name"
                                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please enter lastname.</div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <label htmlFor='faname' className="form-label">Father Name</label>
                                    <input type="text"
                                        id="faname"
                                        className="form-control"
                                        placeholder="father's name"
                                        value={user.fatherName}
                                        onChange={(e) => setUser({ ...user, fatherName: e.target.value })}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please enter father name.</div>
                                </div>
                            </div>
                            <div className="row mb-2 mt-2">
                                <div className="col-md-12 d-grid gap-2">
                                    <button className="btn btn-warning"
                                        type="submit"
                                    >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">Add new user here</div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;