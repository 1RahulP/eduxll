"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/Button";
import WebniarBox from "../upcoming-webinar/webinar-box";

const MasterSlider = ({ response }: any) => {
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
      <section className="bg-[#fff] py-[50px]">
        <div>
          <div className="reviewSlider max-w-[1230px] m-auto grid grid-cols-[1fr_1fr_1fr] gap-8">
            {/* <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            > */}

            <>
              <WebniarBox response={response} category="Masterclasses" />
            </>

            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default MasterSlider;

const reviewArray = [
  {
    image: "/master.jpeg",
    title: "17th Apr | Wed | 7:30 PM",
    desc: "Understand the essential skills needed to achieve your desired Product Management position",
  },
  {
    image: "/master02.jpeg",
    title: "18th Apr | Thu | 7:30 PM",
    desc: "Get assessed by our expert on how to secure a high paying job in Digital Marketing",
  },
  {
    image: "/ankush.jpeg",
    title: "20th Apr | Sat | 11:00 AM",
    desc: "Analyze the ROI of an online MBA ",
  },
  {
    image: "/master02.jpeg",
    title: "18th Apr | Thu | 7:30 PM",
    desc: "Get assessed by our expert on how to secure a high paying job in Digital Marketing",
  },
  {
    image: "/ankush.jpeg",
    title: "20th Apr | Sat | 11:00 AM",
    desc: "Analyze the ROI of an online MBA ",
  },
];
