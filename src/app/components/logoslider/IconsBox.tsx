"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "@/app/models/blogModels";
import { connect } from "@/app/dbConfig";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// eslint-disable-next-line @next/next/no-async-client-component
const IconsBox = ({ response, categories }: any) => {
  console.log("icon box", { response });

  const filterData = response?.filter(
    (item: any) => item?.category === categories
  );

  const [popUp, setPopUp] = useState("");


  console.log("filterData length",filterData?.length)
  return (
    <div className="relative">
        <Slidernav1 navfix="3" />

        <Swiper
              slidesPerView={3.2}
              spaceBetween={15}
              className="mySwiper3 width-100"
              navigation={{
                nextEl: ".review3-swiper-button-next",
                prevEl: ".review3-swiper-button-prev",
              }}
              grid={{
                rows: 2,
              }}
              modules={[Navigation]}
            >
      {filterData?.length > 0 &&
        filterData?.map((item: any, index: any) => {
          return (
            <>

<SwiperSlide
            key={index}
            className="relative"
            onMouseEnter={() => setPopUp(item._id)}
            onMouseLeave={() => setPopUp("")}
          >
              <div
                className="flex  items-center justify-center h-[100% ] "
                
              >
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
                        // className="brightness-100 transition-all hover:transition-all contrast-0 hover:brightness-auto hover:contrast-100"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <Image
                      src={item?.featureImage}
                      width={100}
                      height={36}
                      alt=""
                      objectFit="contain"
                      objectPosition="center"
                      className="brightness-100 transition-all hover:transition-all "
                      // className="brightness-100 transition-all hover:transition-all contrast-0 hover:brightness-auto hover:contrast-100"
                    />
                  </>
                )}
              </div>
              </SwiperSlide>
            </>
          );
        })}
        </Swiper>
    </div>
    
  );
};

export default IconsBox;
