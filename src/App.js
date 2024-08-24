import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/react_project1//' element={<Home />} />
        <Route path='/react_project1//About' element={<About />} />
        <Route path='/react_project1//Contact' element={<Contact />} />
        <Route path='/react_project1//Service' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
