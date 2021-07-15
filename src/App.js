import logo from './media/images/PhillLogo.png';
import './styles/App.css';

import ConsolePane from './components/console_pane/console_pane.jsx';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            GitHub Profile.
          </p>
          <a
            className="App-link"
            href="https://github.com/PhillBet"
            target="_blank"
            rel="noopener noreferrer"
          >
            PhillBet
          </a>
          <ConsolePane />
        </header>
      </div>
    </>

  );
}

export default App;
