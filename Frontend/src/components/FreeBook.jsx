import React from 'react'
import  { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";

// import List  from '../../public/list.json'

import Cards from '../components/cards';

function FreeBook() {
   const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("https://bookstore-7-7ubp.onrender.com/book");
          console.log(res.data);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
    const filterData = book.filter((data)=>data.category==="Free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
       <div>
       <h1 className='text-xl font-bold p-2'>
            Free Offered Courses
        </h1>
        <p>
        We believe local bookstores are essential community hubs that foster culture, curiosity, 
        and a love of reading, and we're committed to helping them thrive.
        </p>
       </div>
    
    <div >
    <Slider {...settings}>
        {filterData.map((item)=>( 
            <Cards item={item} key={item.id}/>
        )) }
      </Slider>
    </div>
</div>
    </>
  );
}

export default FreeBook;
