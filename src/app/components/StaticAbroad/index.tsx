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
import { Navigation } from "swiper/modules";
import Slider from "react-slick";
import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import AboradCard from "../abroadCard";
import Link from "next/link";
import StaticCard from "../staticCard";

const StaticAbroad = ({onlyCards}:any) => {
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
      : activeTab === "free-courses"
      ? FreeCoursesBranch
      : [];

  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px] lg:px-0 px-6">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="flex justify-between items-center">
            <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
              Study Abroad
            </h2>
            <Link href="/study-abroad">
            <Button
              text={"View All  "}
              className={
                "  whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] !rounded-lg   text-white font-medium px-spacing24    "
              }
            />
            </Link>
          </div>
          <div className="md:flex  grid grid-cols-3 gap-[45px] mb-[10px]">
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

          <div className="flex flex-wrap   gap-[10px] gap-y-[5px] my-[10px]">
            {nestedFilter?.map((item, index) => {
              return (
                <BadgeChip
                  theme={
                    item?.value == activeCourseBranch ? "success" : "default"
                  }
                  size="medium"
                  key={item?.label}
                  onClick={() => setActiveCourseBranch(item?.value)}
                >
                  {item?.label}
                </BadgeChip>
              );
            })}
          </div>

          <div className="relative gap-[15px]">
            <StaticCard
              activeTab={activeTab}
              activeCourseBranch={activeCourseBranch}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default StaticAbroad;
