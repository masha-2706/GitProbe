import './App.css';
import { Routes, Route, Link } from "react-router";

import Home from './pages/Home.jsx';

import Copyright from './components/copyright/Copyrgiht.jsx';
import Counter from './components/counter/Counter.jsx';


function App() {

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
   
      <div className='mainPageContainer'>
        <div className='navBlock'>
          <Link to='/'>Home</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Counter />
      <Copyright />
    </div>
  );
}

export default App;