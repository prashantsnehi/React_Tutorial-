import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

let UpdateGlobal = () => {
    let globalState = useSelector((state) => state);
    let [toDo, setTodo] = useState("");
    let dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card shadow-lg">
                    <div className="card-header text-center">
                        <h2>Global State</h2>
                    </div>
                    <div className="card-body text-center">
                        <div className="row" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px", borderRadius: "20px" }}>
                            <div className="col-md-12">
                                <h5 className="text-center">Displaying and updating Values of global variable</h5>
                                <hr />
                                <div className="row g-3 d-flex justify-content-between align-items-center">
                                    <div className="col-amd-12">
                                        <label className="visually-hidden"
                                            htmlFor="n"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">num </div>
                                            <input type="number"
                                                className="form-control"
                                                id="n"
                                                placeholder="n"
                                                value={globalState.num}
                                                onChange={(e) => { dispatch({ type: "SET_N", payload: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="visually-hidden"
                                            htmlFor="name"></label>
                                        <div className="input-group">
                                            <div className="input-group-text">name</div>
                                            <input type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="name"
                                                value={globalState.name.toUpperCase()}
                                                onChange={(e) => { dispatch({ type: "SET_NAME", payload: e.target.value.toUpperCase() }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
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
                                                style={{ backgroundColor: globalState.age <= 5 ? "#d4e2edff" : 
                                                    globalState.age > 5 && globalState.age <= 18 ? "#cdffcfff" : 
                                                    globalState.age > 18 && globalState.age <= 60 ? "#f5ffcdff" : 
                                                    globalState.age > 60 && globalState.age <= 90 ? "#d1cdffff" : "#f8d7da"
                                                 }}
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
                                                style={{ backgroundColor: globalState.isLoggedIn ? "#d4edda" : "#f8d7da" }}
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
                                    <div className="col-md-12">
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
                                    <div className="col-md-12">
                                        <label className="visually-hidden"
                                            htmlFor="todo"></label>
                                        <div className="input-group mb-3">
                                            <div className="input-group-text">Selected Task</div>
                                            <input type="text"
                                                className="form-control"
                                                id="todo"
                                                placeholder="todo"
                                                value={toDo}
                                                style={{ backgroundColor: toDo.length == 0 ? "#f8d7da" : "#d4edda" }}
                                                disabled
                                            />
                                        </div>
                                        <span className="text-danger">Length of Selected Item: {toDo.length}</span>
                                    </div>
                                    
                                </div>
                                <hr />
                                <div className="row mt-3" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px", borderRadius: "20px" }}>
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
                        {/* <hr />
                        <div className="row mt-3" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px", borderRadius: "20px" }}>
                            <div className="col-md-12">
                                <h5>Global State from Redux store:</h5>
                                <hr />
                                <pre>{JSON.stringify(globalState, null, 2)}</pre>
                            </div>
                        </div> */}
                    </div>
                    <div className="card-footer text-center">
                        <p className="text-danger">© 2025 Update Global Component</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow-lg">
                    <div className="card-header text-center">
                        <h2>Global State from Redux store</h2>
                    </div>
                    <div className="card-body text-center">
                        <div className="row" style={{ border: "5px solid #ccc", padding: "10px", margin: "10px", borderRadius: "20px" }}>
                            <div className="col-md-12">
                                <h5 className="text-center">Displaying Global State</h5>
                            </div>
                            <div className="col-md-12">
                                <hr />
                                <pre>{JSON.stringify(globalState, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <p className="text-danger">© 2025 Global State Display</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateGlobal;