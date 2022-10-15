
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <small>REACT_APP_CLIENT_ID is <b>{process.env.REACT_APP_CLIENT_ID}</b> . </small>
        <small>REACT_APP_CLIENT_SECRET is <b>{process.env.REACT_APP_CLIENT_SECRET}</b> . </small>
      </header>
    </div>
  );
}

export default App;
