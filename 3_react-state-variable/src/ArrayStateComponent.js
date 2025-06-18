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
// This component demonstrates how to use state variables with arrays in React.
// It uses the useState hook to manage two arrays: one for numbers and another for strings.
// The component renders the array of numbers as a comma-separated list and iterates over the array of strings to display each name along with its index.
// This showcases how to handle arrays in React state, allowing for dynamic rendering of lists and the ability to manipulate array data.
// The component can be extended to include functionality for adding or removing items from the arrays, providing a more interactive experience.
// It serves as a practical example of managing and displaying array data in a React application, illustrating the use of the map function for rendering lists.
// The component can be useful for beginners to understand how to work with arrays in React, including how to access and display array elements dynamically.
// It can also be a foundation for more complex applications that require array manipulation, such as to-do lists or item inventories.
// The component can be further enhanced by adding features like sorting or filtering the arrays, allowing users to interact with the data in a more meaningful way.
// Overall, this component provides a clear and concise example of using arrays in React