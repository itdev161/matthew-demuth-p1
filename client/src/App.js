import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Top 5 Futurama episodes
        </p>
        <ol>
          <li>
            The luck of the Fryish
          </li>
          <li>
            Three Hundred Big Boys
          </li>
          <li>
            Roswell That Ends Well
          </li>
          <li>
            the Devil’s Hands Are Idle Playthings
          </li>
          <li>
            The Late Philip J. Fry
          </li>
        </ol>
      </header>
    </div>
  );
}

export default App;
