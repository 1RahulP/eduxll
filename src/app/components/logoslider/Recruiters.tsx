"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecruitersSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
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
                        width={100}
                        height={36}
                        key={index}
                        alt=""
                        objectFit="contain"
                        objectPosition="center"
                        className="brightness-100 transition-all hover:transition-all contrast-0 hover:brightness-auto hover:contrast-100"
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
export default RecruitersSlider;

const logosliderarry = [
  {
    logo: "/logoslider/brand01.png",
  },
  {
    logo: "/logoslider/brand02.png",
  },
  {
    logo: "/logoslider/brand03.png",
  },
  {
    logo: "/logoslider/brand05.png",
  },
  {
    logo: "/logoslider/brand06.png",
  },
  {
    logo: "/logoslider/brand07.png",
  },
  {
    logo: "/logoslider/brand01.png",
  },
  {
    logo: "/logoslider/brand02.png",
  },
  {
    logo: "/logoslider/brand03.png",
  },
  {
    logo: "/logoslider/brand05.png",
  },
  {
    logo: "/logoslider/brand06.png",
  },
  {
    logo: "/logoslider/brand07.png",
  },
];
