import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

let Parent = () => {
    let [counter, setCounter] = useState(100);

    return (
        <MyContext.Provider value={counter}>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Parent Component</div>
                            <div className="card-body">
                                <div className="row  d-flex justify-content-around m-2 align-content-between">
                                    <div className="col-md-12">
                                        <input type="text"
                                            className="form-control"
                                            value={counter}
                                            onChange={(e) => setCounter(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="row  d-flex justify-content-around m-2 align-content-between">
                                    <div className="col-md-4">
                                        <Child1 />
                                    </div>
                                    <div className="col-md-4">
                                        <Child2 />
                                    </div>
                                    <div className="col-md-4">
                                        <Child3 />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">Value from the Parent Variable counter: {counter} </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    )
}

export default Parent;