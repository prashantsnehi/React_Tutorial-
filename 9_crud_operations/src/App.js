import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import HomeComponent from './HomeComponent';

function App() {
  return (
    <div className="container">
      <div className='row mt-5'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'>CRUD Example</div>
            <div className='card-body'>
              <div className='row  d-flex mt-4 justify-content-center align-content-center'>
                <div className='col-md-12'>
                  <HomeComponent />
                </div>
                {/* <div className='col-md-4'>
                  <AddEmployee />
                </div>
                <div className='col-md-8'>
                  <HomeComponent />
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
