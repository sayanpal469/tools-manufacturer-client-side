import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Shared/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeSection/Home/Home';
import NavTop from './Pages/Shared/Nav/NavTop';

function App() {
  return (
    <div>
      <NavTop/>
      <Nav/>
      <Routes>
        <Route path='/home' element={ <Home/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
