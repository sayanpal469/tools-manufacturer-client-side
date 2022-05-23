import './App.css';
import Nav from './Pages/Shared/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeSection/Home/Home';
import NavTop from './Pages/Shared/Nav/NavTop';
import Purchase from './Pages/HomeSection/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <NavTop/>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/purchase/:id' element={ <Purchase/> }></Route>
        <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
