import Child9 from './Child9';
import Child10 from './Child10';
import { useContext } from 'react';
import MyContext from './MyContext';

let Child4 = () => {
    let counterResult = useContext(MyContext);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 4</div>
                    <div className="card-body">
                        <p>Child 4: {counterResult} </p>
                        <div className="row">
                            <div className="col-md-6">
                                <Child9 />
                            </div>
                            <div className="col-md-6">
                                <Child10 />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">Child 4</div>
                </div>
            </div>
        </div>
    )
}

export default Child4;