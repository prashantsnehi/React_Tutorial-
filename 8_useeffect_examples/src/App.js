import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home';
import Contact from './Contact';

function App() {
  let [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-content-center mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Component conditionals show hide Toggle</div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-success"
                  onClick={() => setToggle(!toggle)}
                >
                  Toggle Component
                </button>
              </div>
              <hr />
              <div className="row d-flex justify-content-center align-content-center">
                <div className="col-md-12">
                  {toggle ? <Home /> : <Contact />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
