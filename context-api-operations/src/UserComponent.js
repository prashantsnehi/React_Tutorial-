import { useContext, useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import UserContext from "./UserContext";

let UserComponent = () => {
    let [users, setUsers] = useState([
        { fname: 'Yashsvi', lastName: 'Jaiswal', fatherName: 'Mr Jaiwal', rollNumber: '101', class: 'XI', section: 'B' },
        { fname: 'K L', lastName: 'Rahul', fatherName: 'Mr Rahul', rollNumber: '102', class: 'XI', section: 'B' },
        { fname: 'Karun', lastName: 'Nair', fatherName: 'Mr Nair', rollNumber: '103', class: 'XI', section: 'B' },
        { fname: 'Shubhman', lastName: 'Gill', fatherName: 'Mr Gill', rollNumber: '104', class: 'XI', section: 'B' },
        { fname: 'Rishabh', lastName: 'Pant', fatherName: 'Mr Pant', rollNumber: '105', class: 'XI', section: 'B' },
        { fname: 'Nitish', lastName: 'Reddy', fatherName: 'Mr Reddt', rollNumber: '106', class: 'XI', section: 'B' },
        { fname: 'Ravindra', lastName: 'Jadeja', fatherName: 'Mr Jadeja', rollNumber: '107', class: 'XI', section: 'B' },
        { fname: 'Washinton', lastName: 'Sunder', fatherName: 'Mr Washington', rollNumber: '108', class: 'XI', section: 'B' },
        { fname: 'Akash', lastName: 'Deep', fatherName: 'Mr Deep', rollNumber: '109', class: 'XI', section: 'B' },
        { fname: 'Jasprit', lastName: 'Bumrah', fatherName: 'Mr Bumrah', rollNumber: '110', class: 'XI', section: 'B' },
        { fname: 'Mohd', lastName: 'Siraj', fatherName: 'Mr Siraj', rollNumber: '111', class: 'XI', section: 'B' }

    ]);
    let [user,setUser] = useState();

    let displatchUser = (action, payload) => {
        console.log(`dispatchUser is called from add user action: ${action} payload: ${JSON.stringify(payload)}`);
        if (action === 'ADD_USER') {
            setUsers([...users, payload]);
        }
        if (action === 'DEL_USER') {
            console.log(user);
            setUser(payload);
            let newList = users.filter(f => f.rollNumber != payload.rollNumber && f.fname != payload.fname);
            setUsers(newList);
        }    
        console.log(users);
    }

    return (
        <UserContext.Provider value={{ users, displatchUser }}>
            <div className="row">
                <div className="col-md-">
                    <div className="card">
                        <div className="card-header">Users Operations</div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center mb-4">
                                <div className="col-md-4 mb-4">
                                    <AddUser />
                                </div>
                                <div className="col-md-8 mb-4">
                                    <DisplayUser />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">Total Users: {users.length}</div>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    )
}

export default UserComponent;