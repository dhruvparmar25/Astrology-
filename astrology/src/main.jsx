import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ask from './pages/Ask.jsx';
import Hero from './comonent/Hero.jsx';
import HomePage from './pages/HomePage.jsx';
import KundliMatching from './pages/KundliMatching.jsx';
import FreeK from './pages/FreeK.jsx';
import Horoscope from './pages/Horoscope.jsx';
import Love from './pages/Love.jsx';
import Mairrage from './pages/Mairrage.jsx';
import Career from './pages/Career.jsx';
import FAstrology from './pages/FAstrology.jsx';
import Blog from './pages/Blog.jsx';
import More from './pages/More.jsx';
import Footer from './comonent/Footer.jsx';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Hero />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/freek' element={<FreeK />} />
      <Route path='/ask' element={<Ask />} />
      <Route path='/horoscope' element={<Horoscope />} />
      <Route path='/love' element={<Love />} />
      <Route path='/mairrage' element={<Mairrage />} />
      <Route path='/career' element={<Career />} />
      <Route path='/astrology' element={<FAstrology />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/more' element={<More />} />
      <Route path='/kundlimatching' element={<KundliMatching />} />
    </Routes>
    <Footer/>
  </BrowserRouter>)
