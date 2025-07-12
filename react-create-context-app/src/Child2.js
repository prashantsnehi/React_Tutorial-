import { useContext } from 'react';
import Child5 from './Child5';
import Child6 from './Child6';
import MyContext from './MyContext';

let Child2 = () => {
    let counterResult = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Child 2</div>
                    <div className="card-body">
                        <p>Child 2: {counterResult}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <Child5 />
                            </div>
                            <div className="col-md-6">
                                <Child6 />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">Child 2</div>
                </div>
            </div>
        </div>
    )
}

export default Child2;