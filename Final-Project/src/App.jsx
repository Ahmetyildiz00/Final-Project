import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import History from "./components/History/History";
import Mayor from "./components/Mayor/Mayor";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/projeler' element= {<Projects/>} />
        <Route path='/meram' element= {<History/>} />
        <Route path='/baskan' element= {<Mayor/>} />
      </Routes>
      <Footer />
      </Router>

    </div>
  )
}

export default App
