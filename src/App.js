import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App () {
return (
    <BrowserRouter>
    <Navbar />
    <ToastContainer position="top-center" />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>  
  );
}
  
export default App;
