import React from 'react';
import './category.css';



const Category = () => {
  return (
    <div className='mainCate'>
      <h1>Categories</h1>
      <ul className='cateLists'>
        <li>
            <a href='#'>All News</a>
        </li>
        <li>
            <a href='#'>Breaking News</a>
        </li>
        <li>
            <a href='#'>Regular News</a>
        </li>
        <li>
            <a href='#'>Sports</a>
        </li>
        <li>
            <a href='#'> Entertainments </a>
        </li>
        <li>
            <a href='#'> Arts </a>
        </li>
        <li>
            <a href='#'> Culture </a>
        </li>
      </ul>
    </div>
  )
}

export default Category;
