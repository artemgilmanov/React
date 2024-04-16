import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>Hello from App</h1>
        <button className="my-button">Click from App</button>
      </div>
    </div>
  );
}

export default App;
