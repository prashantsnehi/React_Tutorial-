import { useContext } from "react";
import MyContext from "./MyContext";

let Child9 = () => {
    let counterResult = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 9</div>
                    <div className="card-body">
                        <p>Child 9: {counterResult} </p>
                    </div>
                    <div className="card-footer">Child 9</div>
                </div>
            </div>
        </div>
    )
}

export default Child9;