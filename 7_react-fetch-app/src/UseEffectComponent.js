import { useEffect, useState } from "react"

function UseEffectComponent() {
    let normalFunction = () => console.log('This is normal function');
    let [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('Use effect called...') // call repeatedly
    // })

    // if you pass empty array then it will be called once
    useEffect(() => {
        console.log('use effect called')
    },[])   
    return (
        <div className="row d-flex justify-content-center m-4">
            {normalFunction()}
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Use Effect Example</div>
                    <div className="card-body">
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" 
                                onClick={() => setCount(count++)}>
                                    Click Me to increment value: {count}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffectComponent;