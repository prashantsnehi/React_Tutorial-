import logo from './logo.svg';
import './App.css';
import RatingApp from './RatingApp';

function App() {
  return (
    <div className="container">
      <div className='row d-flex justify-content-center align-content-center mt-4'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'>Rating App</div>
            <div className='card-body'>
              <RatingApp />
            </div>
          <div className='card-footer'>Created by Prashant Kumar Snehi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
