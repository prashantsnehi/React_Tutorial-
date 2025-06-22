import { useState } from "react";

let SimpleEvent = () => {
    let handleClick = () => alert('Button clicked!');
    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
        console.log(`Key pressed: ${event.key}`);
    };

    let [count, setCount] = useState(0);
    let incrementCount = () => {
        setInterval(() => {
           setCount(count++);
            if (count >= 10) {
                clearInterval(this);
                console.log('Count reached 10, stopping increment!');
            }
        }, 1000);
    }

    let [names, setNames] = useState(['Alice', 'Bob', 'Charlie']);
    let [newName, setNewName] = useState('');
    let handleEvent = (e) => {
        setNewName(e.target.value);
    }
    let addName = () => {
        setNames([...names, newName]);
        setNewName(''); // Clear the input field after adding the name
    };

    return (
        <div>
            <h1>Simple Event Example</h1>
            {/* <input type="button" value="incline event" onClick={() => console.log('Event Fired!')} />
            <p>Click the button to see an alert.</p>
            <button onClick={handleClick}>Click Me!</button>
            <p>Press the Enter key to see an alert.</p>
            <input type="text" onKeyUp={handleKeyPress} placeholder="Type and press Enter" />
            <p>Open the console to see key presses.</p>
            <hr />
            <h3>Count: {count}</h3>
            <input type="button" value="Increment Count" onClick={incrementCount} />
            <p>Click the button to increment the count.</p> */}
            <hr />
            <input type="text" value={newName} onChange={handleEvent} />
            <input type="button" value="Add Name" onClick={addName} />
            <p>Type a name and click "Add Name" to add it to the list</p>
            <h3>Names List</h3>
            <table border="1" width="90%" cellPadding="10" style={{ margin: 'auto' }}>
                <thead>         
                    <tr>
                        <th width="10%">Index</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((name, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SimpleEvent;