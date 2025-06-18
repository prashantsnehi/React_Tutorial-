import ArrayStateComponent from './ArrayStateComponent';
import './App.css';
import StateComponent from './StateComponent';

function App() {
  return (
    <div className="App">
      <h1>React State Variable Example</h1>
      <p>This is a simple example of using state variables in a React application.</p>
      <hr />
      <StateComponent />
      <hr />
      <ArrayStateComponent />
    </div>
    
  );
}

export default App;
