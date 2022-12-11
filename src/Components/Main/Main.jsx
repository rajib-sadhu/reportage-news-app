import React from 'react';
import './Main.css';

import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <div className='mainDiv'>

        <NavBar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Main
