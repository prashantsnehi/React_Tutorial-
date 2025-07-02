import logo from './logo.svg';
import './App.css';
import ListEmployees from './ListEmployees';

function App() {
  return (
    <div className="container-fluid">
      <div className='row d-flex m-4 justify-content-center align-content-center'>
        <div className='col-md-12'>
          <div className='card shadow-lg bg-body-tertiary rounded'>
            <div className='card-header text-center'><h3>CRUD Operations Demo</h3></div>
            <div className='card-body'>
              <ListEmployees />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
