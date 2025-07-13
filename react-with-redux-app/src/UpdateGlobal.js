import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

let UpdateGlobal = () => {
    let globalState = useSelector((state) => state);
    let [toDo, setTodo] = useState("");
    let dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card shadow-lg">
                    <div className="card-header text-center">
                        <h2>Global State</h2>
                    </div>
                    <div className="card-body text-center">
                        <div className="row" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px" }}>
                            <div className="col-md-12">
                                <div className="row g-3 d-flex justify-content-between align-items-center">
                                    <h4 className="mb-3">Displaying Value of global variable</h4>
                                    <hr />
                                    <div className="col-auto">
                                        <label className="visually-hidden"
                                            htmlFor="n"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">n</div>
                                            <input type="number"
                                                className="form-control"
                                                id="n"
                                                placeholder="n"
                                                value={globalState.n}
                                                onChange={(e) => { dispatch({ type: "SET_N", payload: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="visually-hidden"
                                            htmlFor="name"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">name</div>
                                            <input type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="name"
                                                value={globalState.name}
                                                onChange={(e) => { dispatch({ type: "SET_NAME", payload: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="visually-hidden"
                                            htmlFor="age"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">age</div>
                                            <input type="number"
                                                className="form-control"
                                                id="age"
                                                placeholder="age"
                                                value={globalState.age}
                                                onChange={(e) => { dispatch({ type: "SET_AGE", payload: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="visually-hidden"
                                            htmlFor="loggedIn">
                                            {globalState.isLoggedIn ? "Logged In" : "Logged Out"}
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <input
                                                    className="form-check-input mt-0"
                                                    type="checkbox"
                                                    id="loggedIn"
                                                    checked={globalState.isLoggedIn ? true : false}
                                                    aria-label="Checkbox for following text input"
                                                    onChange={(e) => { dispatch({ type: "TOGGLE_LOGIN" }) }}
                                                />
                                            </div>
                                            <input type="text"
                                                className="form-control"
                                                aria-label="Text input with checkbox"
                                                value={globalState.isLoggedIn ? "Logged In" : "Logged Out"}
                                            />
                                        </div>
                                        {/* <div className="form-check">
                                            <input className="form-check-input"
                                                type="checkbox"
                                                id="loggedIn"
                                                checked={globalState.isLoggedIn ? true : false}
                                                onChange={(e) => { dispatch({ type: "TOGGLE_LOGIN" }) }}
                                            />
                                            <label className="form-check-label" htmlFor="loggedIn">
                                                loggedIn
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="visually-hidden"
                                            htmlFor="todo"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">Selected Task</div>
                                            <input type="text"
                                                className="form-control"
                                                id="todo"
                                                placeholder="todo"
                                                value={toDo}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <select className="form-select mb-3"
                                            onChange={(e) => setTodo(e.target.value)}
                                        >
                                            <option value="" disabled selected>Select a task</option>
                                            {globalState.todos.map((todo, index) => (
                                                <option key={index} className="list-group-item">
                                                    {todo}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-md-6 d-grid gap-2">
                                        <button className="btn btn-primary"
                                            onClick={() => { dispatch({ type: "INCREMENT" }) }}>
                                            Increment
                                        </button>
                                    </div>
                                    <div className="col-md-6 d-grid gap-2">
                                        <button className="btn btn-danger"
                                            onClick={() => { dispatch({ type: "DECREMENT" }) }}>
                                            Decrement
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row mt-3" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px" }}>
                            <div className="col-md-12">
                                <h5>Global State from Redux store:</h5>
                                <hr />
                                <pre>{JSON.stringify(globalState, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <p className="text-danger">© 2025 Update Global Component</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateGlobal;