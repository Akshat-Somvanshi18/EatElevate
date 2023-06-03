import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Mainpage from './Components/Mainpage';
import Cart from './Components/Cart';

function App() {
  const [authenticated,setAuthenticated]=useState(localStorage.getItem("authenticated"));

  return (
    <>
    <Router>
      {/* <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/> */}
      <Routes>
        <Route exact path='/main-page' element={<><Mainpage authenticated={authenticated} setAuthenticated={setAuthenticated}/></>}/>
        <Route exact path='/' element={<><Login setAuthenticated={setAuthenticated} authenticated={authenticated}/></>}/>
        <Route exact path='/Cart' element={<><Cart/></>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
