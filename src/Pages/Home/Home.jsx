import React from 'react';
import Category from './Contents/Catagory/Category';
import News from './Contents/News/News';
import Socials from './Contents/Socials/Socials';
import './Home.css';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='categoryDiv'>
      <Category />
      </div>
      <div className='newsDiv'>
      <News/>
      </div>
      <div className='socialDiv'>
      <Socials/>
      </div>
    </div>
  )
}

export default Home
