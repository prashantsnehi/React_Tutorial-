import { useEffect, useState } from 'react';
import axios from 'axios';

let Home = () => {
    let [msg, setMsg] = useState('');
    let [employees, setEmployees] = useState([]);
    let baseUrl = 'http://localhost:3000/';
    let batsman = 'https://static.vecteezy.com/system/resources/previews/001/912/963/non_2x/cricket-batsman-with-bat-batting-viewed-from-front-vector.jpg';
    let bowler = 'https://as2.ftcdn.net/jpg/04/99/16/09/1000_F_499160964_KCfjMsdT5OL5NsTwofu59QWYGHnBAbYk.jpg';
    let allrounder = 'https://www.shutterstock.com/image-vector/illustration-batsman-playing-cricket-championship-260nw-1873244503.jpg';
    let wicketkeeper = 'https://www.shutterstock.com/image-vector/one-line-continuous-sketch-drawing-260nw-2340958635.jpg';
    useEffect(() => {
        setMsg('Home Component loaded');
        axios.get(`${baseUrl}employee`)
            .then(response => setEmployees(response.data))
            .catch(error => setMsg('Error in getting data'))

        return (() => console.log('Home Component Destroyed/ unmounted'));
    }, []);
    return (
        <div className="row d-flex justify-content-center align-content-center m-4">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-header">Home Component</div>
                    <div className="card-body">
                        <p>{msg}</p>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th>Employee Id</th>
                                    <th>Employee Image</th>
                                    <th>Employee Name</th>
                                    <th>Employee Role</th>
                                    <th>Salary</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {
                                    employees.map(e =>
                                        <tr key={e.id}>
                                            <td style={{ textAlign: 'right' }}>
                                                {e.id}
                                            </td>
                                            <td>
                                                <figure className="figure">
                                                    <img src={e.role == 'Batter' ? batsman : e.role == 'Wicket-keeper' ? wicketkeeper : e.role == 'Allrounder' ? allrounder : bowler} 
                                                        className="figure-img img-fluid rounded" 
                                                        alt="..."
                                                        width="100px"
                                                        height="100px" />
                                                        <figcaption className="figure-caption">{e.empName}</figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <input className='form-control' type='text' value={e.empName}></input>
                                            </td>
                                            <td>
                                                <input className='form-control' type='text' value={e.role}></input>
                                            </td>
                                            <td>
                                                <input className='form-control' type='number' value={e.salary}></input>
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-success">update</button>
                                                    <button type="button" class="btn btn-danger">delete</button>
                                                    {/* <button type="button" class="btn btn-primary">Right</button> */}
                                                </div>
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
    )
}

export default Home;