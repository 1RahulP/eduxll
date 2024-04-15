"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useState } from "react";

const BestCourses = () => {
  const [popUp, setPopUp] = useState("");
  const [filteractive, setfilteractive] = useState<any>("View All");
  console.log("filteractive", { filteractive });

  const activeTab = (item: any) => {
    setfilteractive(item);
  };

  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px] lg:px-0 px-6">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="flex justify-between items-center">
            <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
              Discover <br />
              World&apos;s Best Courses
            </h2>
            <Button
              text={"VIEW ALL  "}
              className={
                "px-6 py-2 border text-[#000] !border-[#000]  !rounded-[0px] hover:bg-[#000] hover:text-[#fff]"
              }
            />
          </div>
          <div className="md:flex hidden grid grid-cols-3 gap-[45px] mb-8">
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {bestSellerArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setPopUp(item.key)}
                  onMouseLeave={() => setPopUp("")}
                >
                  <div className="max-w-[410px] rounded-xl bg-white shadow-md hover:shadow-xl">
                    <div>
                      <Image
                        className="rounded-xl"
                        src={item.imageUrl}
                        alt={"image"}
                        width={410}
                        height={260}
                      />
                    </div>
                    <div>
                      <div className="contentbox p-[30px]">
                        <div className="flex justify-between">
                          <Badgechip className={"text-[#31bf82] bg-[#ebfcf7]"}>
                            {item.badge}
                          </Badgechip>
                          <div className="flex gap-2">
                            <div>
                              <Image
                                src={"/png/rating.png"}
                                alt="rating"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span>4.9 (25)</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="mt-2">
                          <span className="text-blue-600 font-bold mr-2">
                            ${item.discountPrice}{" "}
                          </span>
                          <del>{item.basicPrice}</del>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                          <div>
                            <Image
                              src={item.userImage}
                              alt="rating"
                              width={20}
                              height={20}
                            />
                          </div>
                          <span>{item.username}</span>
                        </div>
                      </div>
                      <div className="border-t-1 px-[30px] flex justify-between py-2">
                        <div className="flex gap-2">
                          <Image
                            src="/png/screen.png"
                            alt={"image"}
                            width={20}
                            height={20}
                          />
                          <span>{item.lessons} Lessons</span>
                        </div>
                        <div className="text-[#2467ec] cursor-pointer">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute ${
                      popUp === item.key ? "block" : "hidden"
                    } max-w-[320px] sm:left-6 left-[2px] rounded-xl top-0 p-6 bg-white`}
                  >
                    <Badgechip
                      className={"bg-[#319dbf] py-[8px] h-auto text-white"}
                    >
                      Business
                    </Badgechip>
                    <h3 className="font-semibold mt-4">
                      Write Better Emails: Tactics for Smarter Team
                      Communication
                    </h3>
                    <p className="my-2 text-md">
                      Level: <span className="text-blue-500">Beginner</span>
                    </p>
                    <p className="text-sm">
                      Knowledge is power. Information is liberating. Education
                      is the premise of progress, in every society, in every
                      family
                    </p>
                    <div className="mt-4">
                      {listArray?.map((value, ind) => {
                        return (
                          <div className="flex gap-2 my-2" key={ind}>
                            <div>
                              <Image
                                src={"/check.png"}
                                alt="check"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="text-md">{value.list}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="my-4">
                      <Button
                        text={"View Details"}
                        className={"text-white bg-blue-500 border-none"}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
    badge: "Development",
    title: "WordPress Development Course for Plugins & Themes",
    discountPrice: 47.0,
    basicPrice: 75.5,
    userImage: "/png/user.png",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardTwo",

    imageUrl: "/best-seller/02.jpg",
    badge: "Development",
    title: "Master Google Docs: Free online documents for personal use",
    discountPrice: 47.0,
    basicPrice: null,
    userImage: "/png/user.png",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardThree",

    imageUrl: "/best-seller/03.jpg",
    badge: "Business",
    title: "Write Better Emails: Tactics for Smarter Team Communication",
    discountPrice: "FREE",
    basicPrice: null,
    userImage: "/png/user.png",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardFourth",

    imageUrl: "/best-seller/04.jpg",
    badge: "Development",
    title: "Python and Django Full Stack Web Developer Bootcamp",
    discountPrice: 47.0,
    basicPrice: null,
    userImage: "/png/user.png",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardFifth",

    imageUrl: "/best-seller/05.jpg",
    badge: "Data Science",
    title: "Data Science Real-Life Data Science Exercises Included",
    discountPrice: 47.0,
    basicPrice: null,
    userImage: "/png/user.png",
    username: "Mark Hanry",
    lessons: 12,
  },
  {
    key: "cardSixth",

    imageUrl: "/best-seller/06.jpg",
    badge: "Life Style",
    title: "Become a Super Human: Naturally & Safely Boost",
    discountPrice: 47.0,
    basicPrice: null,
    userImage: "/png/user.png",
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
