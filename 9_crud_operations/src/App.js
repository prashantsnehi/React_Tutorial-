import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import HomeComponent from './HomeComponent';

function App() {
  return (
    <div className="container">
      <div className='row mt-5'>
        <div className='col-md-12'>
          <div className='card shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='card-header'><h3>CRUD Example</h3></div>
            <div className='card-body'>
              <HomeComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
