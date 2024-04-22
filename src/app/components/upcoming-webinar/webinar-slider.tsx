"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/Button";
import BadgeChip from "../badge";
import { useRouter } from "next/navigation";
import WebniarBox from "./webinar-box";

const WebinarSlider = ({ response }: any) => {
  const router = useRouter();
  console.log("inner response", { response });
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
          <div className="reviewSlider max-w-[1230px] m-auto  grid grid-cols-[1fr_1fr_1fr] gap-8  ">
            {/* <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            > */}
            <WebniarBox response={response} category="webinar" />
            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default WebinarSlider;
