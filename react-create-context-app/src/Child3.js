import { useContext } from 'react';
import Child7 from './Child7';
import Child8 from './Child8';
import MyContext from './MyContext';

let Child3 = () => {
    let counterResult = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 3</div>
                    <div className="card-body">
                        <p>Child 3: {counterResult} </p>
                        <div className="row">
                            <div className="col-md-6">
                                <Child7 />
                            </div>
                            <div className="col-md-6">
                                <Child8 />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">Child 3</div>
                </div>
            </div>
        </div>
    )
}

export default Child3;