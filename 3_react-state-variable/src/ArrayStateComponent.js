import { useState } from 'react';

let ArrayStateComponent = () => {
    let [num, setNum] = useState([1, 2, 3, 4, 5]);
    let [names, setNames] = useState(["John", "Jane", "Doe", "Smith"]);

    return (
        <div>
            <h3>This component demonstrates how to use state variables with arrays in React.</h3>
            <h4>Array of numbers</h4>
            <p>Array: {num.join(', ')}</p>
            <h4>Array of Strings</h4>
            {
                names.map((name, index) => 
                    <p>Index of {name} is {index}</p>)
            }
        </div>
    );
}

export default ArrayStateComponent;