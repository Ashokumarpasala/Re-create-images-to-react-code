import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Card2 from './Card2';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/card2' element={<Card2 />} />
      </Routes>
    </Router>
    {/* <Navbar />
    <div className="conatiner-xl m-5 p-5">
     <Card />
    </div> */}
    </>
  );
}

export default App;
