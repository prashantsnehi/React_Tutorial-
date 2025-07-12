import logo from './logo.svg';
import './App.css';
import UserComponent from './UserComponent';
import NavBar from './NavBar';
import MyValidationForm from './MyValidationForm';

function App() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <NavBar />
          </div>
        </div>
      </div>
      <div className='container m-auto'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>User Management</div>
              <div className='card-body'>
                {/* <MyValidationForm /> */}
                <UserComponent />
              </div>
              <div className='card-footer'>User Management Portal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
