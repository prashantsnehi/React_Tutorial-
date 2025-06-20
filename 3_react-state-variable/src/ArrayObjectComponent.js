import { useState } from 'react';
let ArrayObjectComponent = () => {
    let [users, setUsers] = useState([
        { id: 1, name: "John Doe", isActive: true, balance: 1000.50, image: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg" },
        { id: 2, name: "Jane Smith", isActive: false, balance: 2000.75, image: "https://cdn.dribbble.com/userupload/27341424/file/original-7526e60193cff69cba7dc1cf48a696d6.png?resize=400x300" },
        { id: 3, name: "Alice Johnson", isActive: true, balance: 1500.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTcTum892PGiSMzsMARZo1HrFaOa4GPOgYCgqBAmBf2YHXjiOw2-Y6ikbgfwgsdEI3OM&usqp=CAU" },
    ]);

    return (
        <div>
            <h3>This component demonstrates how to use state variables with arrays of objects in React.</h3>
            <h4>Array of User Objects</h4>
            <p>Syntax: let [users, setUsers] = useState([...]);</p>
            <p>Here is a list of users with their details:</p>
            <table border="1" cellPadding="10" cellSpacing="5" style={{ width: "80%", textAlign: "center", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Activation Status</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr>
                                <td style={{ textAlign: "right" }}>{user.id}</td>
                                <td>
                                    <img src={user.image} alt={user.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.isActive ? "Active" : "Inactive"}</td>
                                <td style={{ textAlign: "right" }}>${user.balance.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td><strong>Total Users: {users.length}</strong></td>
                        <td></td>
                        <td><strong>Active Users: {users.filter(user => user.isActive).length}</strong></td>
                        <td><strong>Inactive Users: {users.filter(user => !user.isActive).length}</strong></td>
                        <td style={{ textAlign: "right" }}><strong>Total Balance: ${users.reduce((total, user) => total + user.balance, 0).toFixed(2)}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ArrayObjectComponent;