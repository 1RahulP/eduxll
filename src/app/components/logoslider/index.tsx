"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[#fff]   py-[30px] ">
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="logoslider">
            <Slider
              autoplay
              {...settings}
              className="items-center justify-center"
            >
              {logosliderarry.map((item, index) => {
                return (
                  <>
                    <div className="flex  items-center justify-center h=[100% ]">
                      <Image
                        src={item.logo}
                        width={160}
                        height={70}
                        key={index}
                        alt=""
                        objectFit="contain"
                        objectPosition="center"
                        className="    "
                      />
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default LogoSlider;

const logosliderarry = [
  {
    logo: "/logoslider/1.webp",
  },
  {
    logo: "/logoslider/2.webp",
  },
  {
    logo: "/logoslider/3.webp",
  },
  {
    logo: "/logoslider/4.webp",
  },
  {
    logo: "/logoslider/5.webp",
  },
  {
    logo: "/logoslider/6.webp",
  },
];
