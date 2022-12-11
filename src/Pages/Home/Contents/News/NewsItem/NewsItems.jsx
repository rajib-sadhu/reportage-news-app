import React from 'react';
import './newsItems.css';

import { AiFillStar, AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';

const NewsItems = (props) => {

  // console.log(props.heading)
  const photo =props.image;

  return (
    <>
                <article className='newsItems' >
                <h1> {props.heading} </h1>
                <div className='newsImage'>
                <img src={photo} alt="news Image" />
                </div>
                <p className='newsPara' > {props.para} <a href="#!">Read More</a>
                </p>
                <div className='details'>
                <div className='report'>
                    <h4> { props.reporterName } </h4>
                    <p>Date- { props.reportTime } </p>
                </div>
                <div className='rating'>
                <h3> <AiFillEye/>  Views {props.views} </h3>
                <h2> <AiFillStar className='iconRating'/> {props.rate} <AiOutlineShareAlt/> </h2>
                </div>
                </div>
                </article>


            
    </>
  )
}

export default NewsItems
