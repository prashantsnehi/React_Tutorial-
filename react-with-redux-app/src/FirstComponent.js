import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
let FirstComponent = () => {
    let [a, setA] = useState(10);
    let n = useSelector((state) => state.n);
    let dispatch = useDispatch();
    // useSelector is used to access the Redux store state
    let name = useSelector((state) => state.name);
    let increment = () => {
        // calling action creator
        dispatch({ type: "INCREMENT" });
    };
    let decrement = () => {
        // calling action creator
        dispatch({ type: "DECREMENT" });
    };
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center align-content-center">
                <div className="col-md-12">
                    <div className="card shadow-lg">
                        <div className="card-header text-center">
                            <h2>First Component</h2>
                        </div>
                        <div className="card-body text-center">
                            <p>Value of local variable a: {a}</p>
                            <p>Value from Redux store: {n}</p>
                            <p>Value of Name from Redux store: {name}</p>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="nameInput">Enter Name:</label>
                                    <input type="text"
                                        className="form-control mb-3"
                                        value={name}
                                        onChange={(e) => {
                                            dispatch({ type: "SET_NAME", payload: e.target.value });
                                        }}
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <div className="row">
                                    <div className="col mt-3 mb-3">
                                        <div className="btn-group">
                                            <a className="btn btn-success"
                                                href="#"
                                                onClick={increment}>
                                                <i class="bi bi-bag-plus"></i> Increment
                                            </a>
                                            <a className="btn btn-danger" href="#" onClick={decrement}>
                                                <i class="bi bi-bag-dash"></i> Decrement
                                            </a>
                                            <a className="btn btn-info" href="#">
                                                <i class="bi bi-person-up"></i> Update Name
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-danger">© 2025 First Component</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstComponent;