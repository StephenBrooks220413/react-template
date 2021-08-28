import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>JavaScript Framework</h1>
        </header>
      </div>
      <Body />
      <Footer />
    </>
  );
}

export default App;
