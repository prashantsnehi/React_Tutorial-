import { useContext } from 'react';
import Child4 from './Child4';
import MyContext from './MyContext';

let Child1 = () => {
    let counterResult = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 1</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Child 1: {counterResult} </p>
                                <Child4 />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">Child 1</div>
                </div>
            </div>
        </div>
    )
}

export default Child1;