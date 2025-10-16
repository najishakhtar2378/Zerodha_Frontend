import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import AboutPage from './Landing_page/about/AboutPage';
import Footer from './Landing_page/Footer';
import HomePage from './Landing_page/Home/HomePage';
import Login from './Landing_page/login/Login';
import Navbar from './Landing_page/Navbar';
import NotFound from './Landing_page/NotFound';
import PricingPage from './Landing_page/pricing/PricingPage';
import ProductsPage from './Landing_page/products/ProductsPage';
import Signup from './Landing_page/signup/Signup';
import SupportPage from './Landing_page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 < BrowserRouter>
 <Navbar/>
 <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
);
