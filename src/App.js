import { Typography } from '@mui/material';
import logo from './logo.svg';
import Paymentpage from './Paymentpage/Paymentpage';
import Preview from './Preview/Preview';
import Planview from './Planview/Planview';
import AboutMEEdit from './aboutmeedit/AboutMeEdit';
import AddAchivement from './AddAchivement/AddAchivement';
import AddOverview from './Pages/AddOverview/AddOverview';
import Admin from './Pages/Admin/Admin.jsx';
import Footer from './Pages/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginTemplates/Login';
import LoginFind from './Pages/LoginTemplates/LoginFind';
import Navbar from './Pages/Navbar';
import Payment from './Pages/PaymemtSuccess/PaymentSuccess';
import Singup from './Pages/Singup/Singup';
import "./common.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newcomp from './Newcomp.jsx';

function App() {
  return (<BrowserRouter>
    {/* // <div className="App"> */}
      {/* <Payment></Payment> */}
     {/* <Login></Login> */}
     {/* <LoginFind/> */}
     {/* <Singup></Singup> */}
     {/* <Admin></Admin> */}
    {/* //  <Home></Home>  */}
     {/* <AddOverview></AddOverview> */}
  
 
      {/* <Paymentpage></Paymentpage> */}
   {/* <Preview></Preview> */}
       {/*   <Planview></Planview>
      <AboutMEEdit></AboutMEEdit>
      <AddAchivement/> */}
{/* //  </div> */}


<Routes>
{/* <Route path="/" element={<Newcomp></Newcomp>}></Route> */}

  <Route path="/" element={<Home></Home>}></Route>

    <Route path="/admin/" element={<Admin />} />
    <Route path="/preview" element={<Preview></Preview>} />
    <Route path="/payment" element={<Paymentpage></Paymentpage>} />
    {/* <Route path="*" element={<NoPage />} /> */}
  
</Routes>
<Footer></Footer> 
</BrowserRouter>
  );
}

export default App;












