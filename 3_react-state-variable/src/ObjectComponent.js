import { useState } from 'react';

let ObjectComponent = () => {
    let [user, setUser] = useState({
        id: 1,
        name: "John Doe",
        isActive: true,
        balance: 1000.50
    });

    return (
        <div>
            <h3>This component demonstrates how to use state variables with objects in React.</h3>
            <h4>Object State</h4>
            <p>
                ID: {user.id}, Name: {user.name}, Activation Status: {user.isActive ? "Yes" : "No"}, Balance: ${user.balance.toFixed(2)}
            </p>
        </div>
    );
}

export default ObjectComponent;
// This component demonstrates how to use state variables with objects in React.
// It uses the useState hook to manage an object containing user details.
// The object includes properties like id, name, isActive status, and balance.
// The component renders the user details in a formatted manner, showcasing how to access object properties in
// a React component. The balance is formatted to two decimal places for better readability.
// The component can be used to illustrate the use of state with complex data types in React applications.
// It can be extended to include functionality for updating the user details, such as changing the name or
// toggling the activation status, providing a more interactive experience.