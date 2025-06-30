import { useState } from 'react';
import axios from 'axios';

let AxiosExampleComponent = () => {
    let url = 'https://dummyjson.com/todos';
    let [todos, setTodos] = useState([]);

    let loadAllData = () => {
        axios.get(url)
            .then(response => {
                console.log(response);
                setTodos(response.data.todos);
            })
            .catch(error => 
                console.log(error)
            )
    }

    return (
        <div className="row d-flex justify-content-around align-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Axios Example</div>
                    <div className="card-body">
                        <div className="row d-flex m-2 justify-content-center align-content-center mb-4">
                            <div className="col-md-6 d-grid gap-2">
                                <button className="btn btn-success"
                                    onClick={loadAllData}>
                                    Load Tasks
                                </button>
                            </div>
                        </div>
                        <div className="row m-2 p-2">
                            <div className="col-md-12">
                                {/* {loadAllData()} */}
                                <table className="table table-striped table-bordered">
                                    <thead className="table-dark">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>Id</th>
                                            <th>User Id</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {
                                            todos.map(t =>
                                                <tr key={t.id}>
                                                    <td style={{ textAlign: "right" }}>{t.id}</td>
                                                    <td style={{ textAlign: "right" }}>{t.userId}</td>
                                                    <td>{t.todo}</td>
                                                    <td style={{ color: t.completed ? "green" : "red" }}>
                                                        {t.completed ? "Yes" : "No"}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AxiosExampleComponent;