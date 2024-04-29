'use client'
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slidernav1 from "../slidernav";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BadgeChip from "../badge";
import { randomUUID } from "crypto";
import { useRouter } from "next/navigation";
import { connect } from "@/app/dbConfig";
import Courses from "@/app/models/coursesModels";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

interface CourseCardProps {
  listArray?: any;
}


const CourseCard = ({   listArray }: CourseCardProps) => {

  const [data, setData] = useState<any>([]);
  const [popUp, setPopUp] = useState("");

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    // slidesToScroll: 1,
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

  const getAllCourses = async ()=>{
    const data = await axios.get('/api/course')
    if(data.status === 200){
      setData(data?.data)
    }
  }

  useEffect(()=>{
    getAllCourses()
  }, [])


  return (
    <>
      
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
        {data?.map((item: any, index: any) => {
          const slug = item.title.replace(/\s+/g, "-").toLowerCase();
          // const filterLatestCards = item?.featureCategoryInsert
          console.log("test",{item})
          return (
            <>
            {item?.featureCategoryInsert[0]?.value === "latest-card" ? <>
            <SwiperSlide
            key={index}
            className="relative"
            onMouseEnter={() => setPopUp(item._id)}
            onMouseLeave={() => setPopUp("")}
          >
            <Link href={`/product/${slug}`} key={index}>
              <div className="cursor-pointer">
                <div className="max-w-[350px] rounded-xl bg-white shadow-md hover:shadow-xl">
                  <div className="relative after:bg-gradient-to-r after:from-black after:rounded-t-xl overflow-hidden	 after:absolute after:w-[100%] after:h-[100%]    after:top-[0px] after:left-[0px]">
                    <Image
                      className="rounded-t-xl h-[120px] w-full object-cover object-top"
                      src={item?.courseImage}
                      alt={"image"}
                      width={380}
                      height={60}
                      objectFit="cover"
                    />

                    <div
                      className="z-[1] absolute shadow-lg shadow-black-500/50 top-[40%] left-[20px] bg-[#fff] rounded-[5px] p-[3px] "
                      style={{
                        transform: "translate(0%, -30%)",
                      }}
                    >
                      <Image
                        className="rounded-[5px]"
                        src="/logoslider/1.webp"
                        alt={"image"}
                        width={100}
                        height={50}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="contentbox p-[25px] pt-[10px]">
                      <div className="flex justify-between">
                        <Badgechip className={"text-[#31bf82] bg-[#ebfcf7]"}>
                          {item?.customCategory[0]?.label}
                        </Badgechip>
                        <div className="flex gap-2">
                          <div>
                            <Image
                              src={"/png/rating.png"}
                              alt="rating"
                              width={15}
                              height={15}
                            />
                          </div>
                          <span className="text-[12px]">4.9 (25)</span>
                        </div>
                      </div>
                      <h3 className="text-[16px] font-semibold mt-2 line-clamp-2">
                        {item?.title}
                      </h3>
                      <div className="mt-2 flex gap-[10px] items-center">
                        <span className="">
                          <Image
                            src="/svg/news-line.svg"
                            alt="rating"
                            width={17}
                            height={17}
                          />
                        </span>
                        <span className="text-[14px]">
                          Master&apos;s Degree
                        </span>
                      </div>
                      <div className="mt-2 flex gap-[10px] items-center">
                        <span className="">
                          <Image
                            src="/svg/calendar-todo-fill.svg"
                            alt="rating"
                            width={17}
                            height={17}
                          />
                        </span>
                        <span className="text-[14px]">{item.duration}</span>
                      </div>
                      {/* <div className="mt-2 flex gap-[10px] items-center">
                      <span className="">
                        <Image
                          src={item?.userImage}
                          alt="rating"
                          width={17}
                          height={17}
                        />
                      </span>
                      <span className="text-[14px]">{item.username}</span>
                    </div> */}
                    </div>
                    <div className="border-t-1 px-[30px] align-center text-center w-full py-2">
                      <div className="text-[#2467ec] cursor-pointer ">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
                <div
                   className={`absolute  z-[9]   ${
                    popUp === item._id ? "block" : "hidden"
                  }
                        max-w-[320px] sm:left-6 left-[2px] rounded-xl top-0 p-6 bg-white`}
                >
                  {/* <h3 className="font-semibold ">
                    Write Better Emails: Tactics for Smarter Team Communication
                  </h3>
                  <p className="my-2 text-md">
                    Level: <span className="text-blue-500">Beginner</span>
                  </p>
                  <p className="text-sm">
                    Knowledge is power. Information is liberating. Education is
                    the premise of progress, in every society, in every family
                  </p> */}

                  <div dangerouslySetInnerHTML={
                    {__html: item?.description.replace(/"/g, "")}
                  }></div>
                  
                  <div className="">
                    {listArray?.map((value: any, ind: any) => {
                      return (
                        <div className="flex gap-2 my-1" key={ind}>
                          <div>
                            <Image
                              src={"/check.png"}
                              alt="check"
                              width={12}
                              height={12}
                            />
                          </div>
                          <span className="text-xs">{value.list}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="my-4 mb-">
                    <Button
                      text={"View Details"}
                      className={
                        "text-white bg-blue-500 border-none text-md !rounded-md mr-auto ml-auto"
                      }
                    />
                  </div>
                </div>
              </div>
            </Link>
            </SwiperSlide>
            </> : <></> }
           
            </>
          );
        })}

</Swiper>
</div>
       
    </>
  );
};
export default CourseCard;
