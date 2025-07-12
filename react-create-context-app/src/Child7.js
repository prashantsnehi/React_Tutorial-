import { useContext } from "react";
import MyContext from "./MyContext";

let Child7 = () => {
    let counterResult = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 7</div>
                    <div className="card-body">
                        <p>Child 7: {counterResult} </p>
                    </div>
                    <div className="card-footer">Child 7</div>
                </div>
            </div>
        </div>
    )
}

export default Child7;