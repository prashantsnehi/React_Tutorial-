import logo from './logo.svg';
import './App.css';
import MealComponent from './MealComponent';
import AxiosExampleComponent from './AxiosExampleComponent';
import UseEffectComponent from './UseEffectComponent';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              Testing Axios and Fetch functionality in React
            </div>
            <div className="card-body">
              <div className="row d-flex justify-content-center align-content-center m-4">
                <div className="col-md-12">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true">Fetch Meals
                      </button>
                      <button className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false">
                        Fetch Tasks using axios
                      </button>
                      <button className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false">
                        UseEffect Example
                      </button>
                      <button className="nav-link"
                        id="nav-disabled-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#nav-disabled" 
                        type="button" 
                        role="tab" 
                        aria-controls="nav-disabled" 
                        aria-selected="false" 
                        disabled>Disabled</button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" 
                      id="nav-home" 
                      role="tabpanel" 
                      aria-labelledby="nav-home-tab" 
                      tabIndex="0">
                      <MealComponent />
                    </div>
                    <div className="tab-pane fade" 
                      id="nav-profile" 
                      role="tabpanel" 
                      aria-labelledby="nav-profile-tab" 
                      tabIndex="0">
                      <AxiosExampleComponent />
                    </div>
                    <div className="tab-pane fade" 
                      id="nav-contact" 
                      role="tabpanel" 
                      aria-labelledby="nav-contact-tab" 
                      tabIndex="0">
                        <UseEffectComponent />
                    </div>
                    <div className="tab-pane fade" 
                      id="nav-disabled" 
                      role="tabpanel" 
                      aria-labelledby="nav-disabled-tab" 
                      tabIndex="0">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MealComponent /> */}
      {/* <AxiosExampleComponent /> */}
    </div>
  );
}

export default App;
