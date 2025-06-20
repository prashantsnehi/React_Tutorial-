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
            <p>id: {id},  Name: {name}, Activation Status: {isActive ? "Active" : "Inactive"} having balance: ${balance}</p>
        </div>
    );
}

export default StateComponent;
// This component demonstrates how to use state variables in React.
// It uses the useState hook to manage primitive data types such as id, name, isActive status, and balance.
// The component renders these state variables in a formatted manner, showcasing how to access and display state in a React component.
// The isActive status is displayed as "Yes" or "No" based on its boolean value, providing a clear indication of the user's activation status.
// The balance is displayed as a numeric value, which can be formatted further if needed.
// This component serves as a basic example of managing state in React applications, illustrating the use of the useState hook for primitive types.
// It can be extended to include functionality for updating these state variables, such as changing the name, toggling the activation status, or modifying the balance, providing a more interactive experience.
// The component can also be useful for beginners to understand how to work with state in React, including how to initialize state variables and render them in the UI.
// Overall, this component provides a clear and concise example of using state variables in React, making it a good starting point for learning about state management in React applications.
// It can be further enhanced by adding input fields or buttons to allow users to modify the state variables,
// demonstrating how to handle user interactions and update state dynamically.