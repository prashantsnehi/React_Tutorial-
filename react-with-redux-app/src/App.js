import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import UpdateGlobal from './UpdateGlobal';

function App() {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h2>React with Redux Example</h2>
            </div>
            <div className="card-body text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="display-4">Welcome to React with Redux</h1>
              <p className="lead">This is a simple application to demonstrate React with Redux.</p>
              <p className="text-secondary">Explore the features and functionalities!</p>
            </div>
            <div className="card-footer text-center">
              <p className="text-danger">© 2025 React with Redux App</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* <div className="card shadow-lg">
            <div className="card-header text-center">
              <h1>React with Redux Example</h1>
            </div>
            <div className="card-body text-center"> */}
              <UpdateGlobal />
            {/* </div>
            <div className="card-footer text-center">
              <p className="text-danger">© 2025 React with Redux App</p>
            </div>
          </div> */}
        </div>
        {/* <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h2>React with Redux Example</h2>
            </div>
            <div className="card-body text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="display-4">Welcome to React with Redux</h1>
              <p className="lead">This is a simple application to demonstrate React with Redux.</p>
              <p className="text-secondary">Explore the features and functionalities!</p>
            </div>
            <div className="card-footer text-center">
              <p className="text-danger">© 2025 React with Redux App</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h2>React with Redux Example</h2>
            </div>
            <div className="card-body text-center">
              <FirstComponent />
            </div>
            <div className="card-footer text-center">
              <p className="text-white">© 2023 React with Redux App</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
