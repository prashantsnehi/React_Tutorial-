import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import avtar from './cheerful-school-boy.png'; // Assuming you have an image in the same directory
// import LoginWithPremitiveState from './LoginWithPremitiveState';
import LoginWithObject from './LoginWithObject';

function App() {
  let [imgUrl, setImgUrl] = useState('https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/61274adffc9ff6001d2f6b81.jpg');
  let [imgUrl2, setImgUrl2] = useState('https://dharohar.hargharpuja.com/wp-content/uploads/2025/01/matsya-avatar-of-lord-vishnu.jpg');
  return (
    <div className="container-fluid" 
      style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', height: 'auto'}}
    >
      <LoginWithObject />
      {/* <h1>React Login App</h1> */}
      {/* <LoginWithPremitiveState /> */}  
    </div>
  );
}

export default App;
