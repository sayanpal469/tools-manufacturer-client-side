import './App.css';
import Nav from './Pages/Shared/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeSection/Home/Home';
import NavTop from './Pages/Shared/Nav/NavTop';
import Purchase from './Pages/HomeSection/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SignUp from './Pages/Shared/LoginArea/SignUp/SignUp';
import Login from './Pages/Shared/LoginArea/Login/Login';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import DashBoard from './Pages/Shared/DashBoard/DashBoard';
import MyProfile from './Pages/Shared/DashBoard/MyProfile/MyProfile';
import MyOrders from './Pages/Shared/DashBoard/MyOrders/MyOrders';
import AddReview from './Pages/Shared/DashBoard/AddReview/AddReview';

function App() {
  return (
    <div>
      <NavTop/>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/purchase/:id' element={ <RequireAuth>
          <Purchase/>
        </RequireAuth> }></Route>
        <Route path='/dashBoard' element={ <RequireAuth><DashBoard/></RequireAuth> }>
          <Route index element={ <MyProfile/> }></Route>
          <Route path='myOrders' element={ <MyOrders/> }></Route>
          <Route path='addReview' element={ <AddReview/> }></Route>
        </Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
        <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
