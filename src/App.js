import logo from './logo.svg';
import './App.css';

function Title(props){
  return (
      <h1>{props.content}</h1>
    )
}


function App() {
  let nexthead = "This is title"

  return (
    <div className="App">
      <header className="App-header">
        <Title content={nexthead} />
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
    </div>
  );
}

export default App;
