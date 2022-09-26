import React from 'react';
import './App.css'
import Home from './Components/Home';
import { BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Profile from './Components/Profile';

function App() {

  return (

    <div className='app'>
        
      <Router>
         <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/profile/:token" element={<Profile/>}/>
         </Routes>
      </Router>

    </div>

  );

}

export default App;
