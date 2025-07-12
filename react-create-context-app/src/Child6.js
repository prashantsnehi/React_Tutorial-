import { useContext } from "react";
import MyContext from "./MyContext";

let Child6 = () => {
    let counterResult = useContext(MyContext);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 6</div>
                    <div className="card-body">
                        <p>Child 6: {counterResult} </p>
                    </div>
                    <div className="card-footer">Child 6</div>
                </div>
            </div>
        </div>
    )
}

export default Child6;