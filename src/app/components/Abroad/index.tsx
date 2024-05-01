"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slidernav1 from "../slidernav";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BadgeChip from "../badge";
import Link from "next/link";
interface coursesCardsProp {
  onlyCards?: boolean;
}

const BestCourses = ({ onlyCards }: coursesCardsProp) => {
  const [popUp, setPopUp] = useState("");
  const [filteractive, setfilteractive] = useState<any>("View All");
  console.log("filteractive", { filteractive });

  const activeTab = (item: any) => {
    setfilteractive(item);
  };
  const speeializationtab = [
    { speeialglistItem: "Artificial Intelligence" },
    { speeialglistItem: "Data Science" },
    { speeialglistItem: "Finance" },
    { speeialglistItem: "Business Administration" },
    { speeialglistItem: "Cybersecurity" },
    { speeialglistItem: "Computer Science" },
    { speeialglistItem: "View all topics" },
  ];

  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px] lg:px-0 px-6">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          {onlyCards === false && (
            <>
              <div className="flex justify-between items-center">
                <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
                  Study Abroad
                </h2>
                <Link href="/study-abroad">
                  <Button
                    text={"View All  "}
                    className={
                      "justify-center items-center gap-spacing8 inline-flex whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 min-w-124px"
                    }
                  />
                </Link>
              </div>
              <div className="md:flex hidden grid grid-cols-3 gap-[45px] mb-[10px]">
                {Coursesfilter.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={() => activeTab(item)}
                        className={`${
                          filteractive?.tabname === item.tabname
                            ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                            : ""
                        } `}
                      >
                        {item.tabname}
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="flex flex-wrap   gap-[10px] gap-y-[5px] my-[10px]">
                {speeializationtab.map((item, index) => {
                  return (
                    <>
                      <BadgeChip theme="default" size="medium" key={index}>
                        {item.speeialglistItem}
                      </BadgeChip>
                    </>
                  );
                })}
              </div>
            </>
          )}

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
              {bestSellerArray?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="relative"
                    onMouseEnter={() => setPopUp(item.key)}
                    onMouseLeave={() => setPopUp("")}
                  >
                    <div>
                      <div className="max-w-[350px] rounded-xl bg-white shadow-md hover:shadow-xl">
                        <div className="relative after:bg-gradient-to-r after:from-black after:rounded-t-xl overflow-hidden	 after:absolute after:w-[100%] after:h-[100%]    after:top-[0px] after:left-[0px]">
                          <Image
                            className="rounded-t-xl h-[120px] w-full object-cover object-top"
                            src={item.imageUrl}
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
                              src={item.logo}
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
                              <Badgechip
                                className={"text-[#31bf82] bg-[#ebfcf7]"}
                              >
                                {item.badge}
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
                              {item.title}
                            </h3>
                            <div className="mt-2 flex gap-[10px] items-center">
                              <span className="">
                                {/* ${item.discountPrice}{" "} */}
                                <Image
                                  src={item?.degreeIcon}
                                  alt="rating"
                                  width={17}
                                  height={17}
                                />
                              </span>
                              <span className="text-[14px]">{item.degree}</span>
                            </div>
                            <div className="mt-2 flex gap-[10px] items-center">
                              <span className="">
                                {/* ${item.discountPrice}{" "} */}
                                <Image
                                  src={item?.monthsIcons}
                                  alt="rating"
                                  width={17}
                                  height={17}
                                />
                              </span>
                              <span className="text-[14px]">{item.months}</span>
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
                              <span className="text-[14px]">
                                {item.username}
                              </span>
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
                        className={`absolute z-[9]  ${
                          popUp === item.key ? "block" : "hidden"
                        }
                        max-w-[320px] sm:left-6 left-[2px] rounded-xl top-0 p-6 bg-white`}
                      >
                        {/* <Badgechip
                          className={"bg-[#319dbf] py-[8px] h-auto text-white"}
                        >
                          Business
                        </Badgechip> */}
                        <h3 className="font-semibold mt-4">
                          Write Better Emails: Tactics for Smarter Team
                          Communication
                        </h3>
                        <p className="my-2 text-md">
                          Level: <span className="text-blue-500">Beginner</span>
                        </p>
                        <p className="text-sm">
                          Knowledge is power. Information is liberating.
                          Education is the premise of progress, in every
                          society, in every family
                        </p>
                        <div className="">
                          {listArray?.map((value, ind) => {
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
                        <div className="my-4">
                          <Button
                            text={"View Details"}
                            className={
                              "text-white bg-blue-500 border-none text-md !rounded-md"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default BestCourses;

const Coursesfilter = [
  { tabname: "View All" },
  { tabname: "Data Science" },
  { tabname: "Development" },
  { tabname: "Business" },
  { tabname: "Life Styles" },
];
const bestSellerArray = [
  {
    key: "cardOne",
    imageUrl: "/best-seller/01.jpg",
    logo: "/logoslider/1.webp",

    badge: "Development",
    title: "WordPress Development Course for Plugins & Themes",
    degreeIcon: "/svg/news-line.svg",
    degree: "Master's Degree",
    discountPrice: 47.0,
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "6 Months",
    basicPrice: 75.5,
    userImage: "/svg/id-card-line.svg",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardTwo",
    imageUrl: "/best-seller/02.jpg",
    logo: "/logoslider/2.webp",
    badge: "Development",
    title: "Master Google Docs: Free online documents for personal use",
    degreeIcon: "/svg/refund-line.svg",
    degree: "Executive PG Program",
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "12 Months",
    discountPrice: 47.0,
    basicPrice: null,
    userImage: "/svg/id-card-line.svg",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardThree",

    imageUrl: "/best-seller/03.jpg",
    logo: "/logoslider/3.webp",
    badge: "Business",
    title: "Write Better Emails: Tactics for Smarter Team Communication",
    discountPrice: "FREE",
    degreeIcon: "/svg/graduation-cap-line.svg",
    degree: "Certification",
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "4 Months",
    basicPrice: null,
    userImage: "/svg/id-card-line.svg",

    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardFourth",

    imageUrl: "/best-seller/04.jpg",
    logo: "/logoslider/4.webp",
    badge: "Development",
    title: "Python and Django Full Stack Web Developer Bootcamp",
    discountPrice: 47.0,
    degreeIcon: "/svg/news-line.svg",
    degree: "Certification",
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "18 Months",
    basicPrice: null,
    userImage: "/svg/id-card-line.svg",

    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardFifth",

    imageUrl: "/best-seller/05.jpg",
    logo: "/logoslider/5.webp",
    badge: "Data Science",
    title: "Data Science Real-Life Data Science Exercises Included",
    discountPrice: 47.0,
    degreeIcon: "/svg/refund-line.svg",
    degree: "Executive PG Program",
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "8 Months",
    basicPrice: null,
    userImage: "/svg/id-card-line.svg",

    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardSixth",

    imageUrl: "/best-seller/06.jpg",
    logo: "/logoslider/6.webp",
    badge: "Life Style",
    title: "Become a Super Human: Naturally & Safely Boost",
    discountPrice: 47.0,
    degreeIcon: "/svg/graduation-cap-line.svg",
    degree: "Master's Degree",
    monthsIcons: "/svg/calendar-todo-fill.svg",
    months: "12 Months",
    basicPrice: null,
    userImage: "/svg/id-card-line.svg",

    username: "Danial",
    lessons: 12,
  },
];
const listArray = [
  {
    list: "Scratch to HTML",
  },
  {
    list: "Learn how to code in Python",
  },
  {
    list: "Unlimited backend database creation",
  },
  {
    list: "Adobe XD Tutorials",
  },
];
