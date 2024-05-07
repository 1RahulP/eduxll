"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BadgeChip from "../badge";
import { useRouter } from "next/navigation";
import CourseCard from "../courseCard";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";

const BestCourses = () => {
  const [popUp, setPopUp] = useState("");
  const [activeTab, setActiveTab] = useState("view-all");
  const [activeCourseBranch, setActiveCourseBranch] = useState("");
  const nestedFilter =
    activeTab === "master"
      ? MasterBranch
      : activeTab === "bachelor"
      ? BachelorBranch
      : activeTab === "certificate"
      ? CertificateBranch
      : // : activeTab === "free-courses"
        // ? FreeCoursesBranch
        [];

  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px] lg:px-0 px-6">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="sm:flex justify-between items-center sm:mb-0 mb-4">
            <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
              Uncover <br />
              Leading Global Courses
            </h2>
            <Button
              text={"View All  "}
              className={
                "  whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] !rounded-lg   text-white font-medium px-spacing24    "
              }
            />
          </div>
          <div className="md:flex  grid grid-cols-3 sm:gap-[45px] gap-4 mb-[10px]">
            {CourseFilter?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(item?.value), setActiveCourseBranch("");
                    }}
                    style={{ cursor: "pointer" }}
                    className={`${
                      activeTab == item?.value
                        ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                        : ""
                    } `}
                  >
                    {item?.label}
                  </div>
                </>
              );
            })}
          </div>

          <div className=" ">
            <div className="relative tabsliderlayout">
              {/* <Slidernav1 navfix="3" navsize="25" /> */}

              <Swiper
                slidesPerView={6}
                
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
                {nestedFilter?.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={item?.label}>
                      <BadgeChip
                        theme={
                          item?.value == activeCourseBranch
                            ? "success"
                            : "default"
                        }
                        size="medium"
                        onClick={() => setActiveCourseBranch(item?.value)}
                      >
                        {item?.label}
                      </BadgeChip>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="relative gap-[15px] mt-[15px]">
            <CourseCard
              activeTab={activeTab}
              activeCourseBranch={activeCourseBranch}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BestCourses;
