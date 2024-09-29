import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // filtering book which have category of free 
        const book = res.data.filter((data) => data.category === "Free");
        setBook(book);
      } catch (error) {
        console.log("Error ", error);
      }
    };

    getBook();
  }, []);

 
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="text-xl pb-2 font-semibold">Free offered courses</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quas
          itaque tenetur neque suscipit a libero sed reiciendis esse nulla.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
