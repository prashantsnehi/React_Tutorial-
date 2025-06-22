import logo from './logo.svg';
import './App.css';
// import LoginWithPremitiveState from './LoginWithPremitiveState';
import LoginWithObject from './LoginWithObject';

function App() {
  return (
    <div className="App">
      <h1>React Login App</h1>
      {/* <LoginWithPremitiveState /> */}
      <LoginWithObject />
    </div>
  );
}

export default App;
