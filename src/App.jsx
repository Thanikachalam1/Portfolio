import './App.css';
import Header from './Home/header/Header';
import Home from './Home/home';
import About from './About/about';
import Skills from './Skills/skills';
import Projects from './Projects/projects';
import Contact from './Contact/contact';
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

        <div className='Skills'>
          <Skills />
        </div>

        <div className='Projects'>
          <Projects />
        </div>

        <div className='Contact'>
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default App;
