import React from 'react';
import './news.css';

import { newsData } from './NewsData';
import NewsItems from './NewsItem/NewsItems';

const News = () => {


    console.log(newsData);


  return (
    <div className='newsDiv'>

    <div className='newsNo'>
        <h1> This Category has news : {10} </h1>
    </div>

    <section className='allNews'>

    {
        newsData.map((value,i)=>{

            return <NewsItems 
                key={i}
                heading={value.news.heading}
                image={value.news.img}
                para={value.news.para}
                reporterName={value.news.report.name}
                reportTime={value.news.report.time}
                rate={value.news.rating}
                views={value.news.views}
             />

        })
    }

        

    </section>
    
    </div>
  )
}

export default News;
