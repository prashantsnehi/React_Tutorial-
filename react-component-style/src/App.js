import logo from './logo.svg';
import './App.css';
import AppHeader from './FunctionStyleComponent';
import AppFooter from './ArrowFunctionStyleComponent';
import ClassStyleComponent from './ClassStyleComponent';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ClassStyleComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AppFooter />
    </div>
  );
}

export default App;
