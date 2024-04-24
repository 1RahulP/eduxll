"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "@/app/models/blogModels";
import { connect } from "@/app/dbConfig";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line @next/next/no-async-client-component
const IconsBox = ({ response, categories }: any) => {
  console.log("icon box", { response });

  const filterData = response?.filter(
    (item: any) => item?.category === categories
  );

  const [popUp, setPopUp] = useState("");

  console.log("filterData length", filterData?.length);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {filterData?.length > 0 &&
        filterData?.map((item: any, index: any) => {
          return (
            <>
              <div className="flex  items-center justify-center h-[100% ] ">
                {categories === "news" ? (
                  <>
                    <a href={`${item?.link}`} target="_blank">
                      <Image
                        src={item?.featureImage}
                        width={100}
                        height={36}
                        alt=""
                        objectFit="contain"
                        objectPosition="center"
                        className="brightness-100 transition-all hover:transition-all cursor-pointer "
                      />
                    </a>
                  </>
                ) : categories === "recruiters" ? (
                  <>
                    <Image
                      src={item?.featureImage}
                      width={100}
                      height={36}
                      alt=""
                      objectFit="contain"
                      objectPosition="center"
                      className="brightness-100 transition-all hover:transition-all "
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
    </Slider>
  );
};

export default IconsBox;
