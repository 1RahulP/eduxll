"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[#fff] py-[50px]  ">
        <div>
          <div className="reviewSlider">
            <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            >
              {reviewArray?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="  bg-[#f8f9fb] p-8 rounded-md mr-6"
                    //style={{ marginRight: "20px" }}
                  >
                    <div>
                      <div className="flex gap-4">
                        <div>
                          <Image
                            src={item.image}
                            alt="image"
                            width={44}
                            height={44}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl text-[#2467EC] mt-8 mb-6">
                        {item.exp}
                      </h4>
                      <p>{item.desc}</p>
                      <div className="flex mt-4">
                        <Image
                          src={"/png/rating.png"}
                          alt="image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={"/png/rating.png"}
                          alt="image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={"/png/rating.png"}
                          alt="image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={"/png/rating.png"}
                          alt="image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={"/png/rating.png"}
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReviewSlider;

const reviewArray = [
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
  {
    image: "/png/user.png",
    name: "Richard Joseph",
    title: "Student",
    exp: "Best Experience !",
    desc: "There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
  },
];