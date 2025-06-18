import { useState } from 'react';
function StateComponent() {
    let [id, setId] = useState(1);
    let [name, setName] = useState("John Doe");
    let [isActive, setIsActive] = useState(true);
    let [balance, setBalance] = useState(1000.50);
    return (
        <div>
            <h3>This component demonstrates how to use state variables in React.</h3>
            <h4>Premitivie Type variables</h4>
            <h5>Syntax: let [id, setId] = useState(1);</h5>
            <p>id: {id},  Name: {name}, Activation Status: {isActive ? "Yes" : "No"} having balance: {balance}</p>
        </div>
    );
}

export default StateComponent;