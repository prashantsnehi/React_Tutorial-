import logo from './logo.svg';
import './App.css';
import SimpleEvent from './SimpleEvent';
import EmployeeState from './EmployeeSate';
import ProductArrayState from './ProductArrayState';

function App() {
  return (
    <div className="App">
      <h1>Event Examples</h1>
      {/* <hr /> */}
      {/* <SimpleEvent /> */}
      {/* <hr /> */}
      {/* <EmployeeState /> */}
      <hr />
      <h2>Product Array State Example</h2>
      <ProductArrayState />
    </div>
  );
}

export default App;
