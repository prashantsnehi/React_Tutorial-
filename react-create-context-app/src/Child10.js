import { useContext } from "react";
import MyContext from "./MyContext";

let Child10 = () => {
    let counterResult = useContext(MyContext);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 10</div>
                    <div className="card-body">
                        <p>Child 10: {counterResult} </p>
                    </div>
                    <div className="card-footer">Child 10</div>
                </div>
            </div>
        </div>
    )
}

export default Child10;