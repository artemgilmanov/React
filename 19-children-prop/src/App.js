import './App.css';
import Wrapper from './components/Wraper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Hello from App Wrapper!</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text from App Wrapper!</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
