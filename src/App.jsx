import './App.css';
import Header from './Home/header/Header';
import Home from './Home/home';
import About from './About/about';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="Home">
          <Home />
        </div>
        <div className="About">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
