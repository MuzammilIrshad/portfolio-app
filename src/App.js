import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';



function App() {
    return (
        <>
            <div className="home">
              <NavBar />
               <Home/>
            </div>
            <Projects />
            <Contact/>
       </>
            );
}

export default App;
