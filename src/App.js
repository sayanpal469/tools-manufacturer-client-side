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
import Portfolio from './Pages/Shared/Portfolio/Portfolio';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';
import MakeAdmin from './Pages/Shared/DashBoard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Shared/Payment/Payment';
import ManageProduct from './Pages/Shared/DashBoard/ManageProduct/ManageProduct';
import AddProduct from './Pages/Shared/DashBoard/AddProduct/AddProduct';
import ManageOrders from './Pages/Shared/DashBoard/ManageOrders/ManageOrders';
import Blogs from './Pages/Shared/Blogs/Blogs';

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
          <Route path='makeAdmin' element={ <RequireAdmin>
            <MakeAdmin/>
          </RequireAdmin> }></Route>

          <Route path='addProduct' element={ <RequireAdmin>
            <AddProduct/>
          </RequireAdmin> }></Route>

          <Route path='manageProduct' element={ <RequireAdmin>
            <ManageProduct/>
            </RequireAdmin> }>
            </Route>

            <Route path='manageOrders' element={ <RequireAdmin>
            <ManageOrders/>
            </RequireAdmin> }></Route>

            <Route path='payment/:id' element={ <Payment/> }></Route>
          </Route>

        
        <Route path='/blogs' element={ <Blogs/> }></Route>
        <Route path='/portfolio' element={ <Portfolio/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
        <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
