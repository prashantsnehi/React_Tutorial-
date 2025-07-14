import logo from './logo.svg';
import './App.css';
import NavBarComponent from './NavbarComponent';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-12'>
          <NavBarComponent />
          {/* <Link to="/" className="nav-link active">Home</Link>
          <Link to="/aboutUs" className="nav-link">About Us</Link>
          <Link to="/contactUs" className="nav-link">Contact Us</Link>
          <Link to="/login" className="nav-link">Login</Link> */}
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/contactUs' element={<ContactUs />}></Route>
              <Route path='/aboutUs' element={<AboutUs />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
