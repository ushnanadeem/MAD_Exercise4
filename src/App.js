import logo from './logo.svg';
import './App.css';
import Exercise2 from './Exercise4';
import AboutUs from './AboutUs';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <nav>
        
  <Link to='/exercise4'>Exercise4</Link>
  
</nav>

      <Exercise4 />
      
      <Routes>
        <Route path = '/exercise4' element = {<Exercise4/>} />
        <Route path = '/about-us' element = {<AboutUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
