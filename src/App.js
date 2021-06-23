import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';


/* */
function App() {
    return (
        <>
            <div className="home">
                <NavBar />
                <Home />
            </div>
            <Skills /> 
            <Projects />
            <Contact /> 
           
       </>
            );
}

export default App;
