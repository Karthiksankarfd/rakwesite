import logo from './logo.svg';
import './App.css';
import FameComponent from './components/FameComponent';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import About from './components/About';
import RAKfelicity from './components/RAK felicity/RAKfelicity';
// import NewNavbar from "./components/NewNavbar"

function App() {
  return (
    <div className="App overflow-x-hidden">
        <Navbar/>
        <Routes>
            <Route path='/RAK' element={<Projects/>}  />
            <Route path='about' element={<About/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='projectdetails' element={<ProjectDetails/>} />
           
            <Route path='Rkfelicty' element={<RAKfelicity/>} />

        </Routes>
    
    </div>
  );
}

export default App;
