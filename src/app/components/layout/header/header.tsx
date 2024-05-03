"use client";
import Image from "next/image";
import Button from "../../button/Button";
import ModalBox from "../../modal-box/modal-box";
import { useState } from "react";
import BadgeChip from "../../badge";
import Tabslider from "../../tabnavslider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slidernav1 from "../../slidernav";
import SideMenuCardbox from "../../sidemenucardbox";
import { useRouter } from "next/navigation";
import {
  BachelorBranch,
  CertificateBranch,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import CourseCard from "../../courseCard";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [color, setColor] = useState("");
  const [sidebar, setSIdebar] = useState(false);
  const [pagePartition, setPagePartition] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const [moreMenu, setMoreMenu] = useState("");
  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };

  const toggleMore = (item: string) => {
    // console.log(item,"console");
    item === "Free Master Class" && router.push("/free-masterclass");
    item === "Webinars" && router.push("/webinars");
    item === "Blog" && router.push("/blogs");
    item === "about us" && router.push("/about-us");
    item === "Contact us" && router.push("/contact-us");
    item === "Study Abroad" && router.push("/study-abroad");
  };
  const toggleSidebar = (val: any) => {
    setColor(val);
    setPagePartition(true);
  };
  const sideBarClose = (value: any) => {
    setColor("");
  };

  const [filteractive, setfilteractive] = useState<any>(
    "Artificial Intelligence"
  );
  console.log("bablu", { filteractive });
  // const activeTab = (item: any) => {
  //   setfilteractive(item);
  // };
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("");
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
      <div className="sticky top-0 z-[99]">
        <div className="flex p-2 px-8 justify-between items-center  shadow-md custom-bg z-[9] border-b">
          <div className="flex items-center gap-8">
            <div onClick={() => router.push("/")} className="cursor-pointer">
              <Image src={"/logo.webp"} alt="close" width={160} height={50} />
            </div>
            {/* <div className="p-2 shadow-xl text-center border rounded-t-2xl">
            <p className="text-xl font-semibold">5</p>
            <p className="text-sm text-[#adadad]"> YEARS</p>
          </div> */}
            <div
              // onMouseEnter={() => setSIdebar(true)}
              onClick={() => setSIdebar(!sidebar)}
            >
              <Button
                notesImage
                dropdownImage
                text={"Course"}
                className={
                  "bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta border-[0px] hover:border-[0px] hover: text-[#fff] hover:bg-red-700 !rounded-lg lg:flex hidden "
                }
              />
            </div>
          </div>
          <div className="lg:flex hidden gap-8 items-center">
            <div className="font-[500] text-sm">
              <ul className="flex gap-4 relative">
                {menuArray?.map((item, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="cursor-pointer text-lg font-normal flex items-center "
                        // onClick={() => setIsToggled(!isToggled)}
                      >
                        {item.menu === "More" ? (
                          <div
                            className="flex items-center text-[15px] font-[400] text-[#000]"
                            onClick={() => setIsToggled(!isToggled)}
                          >
                            {item.menu}
                            <div>
                              {item.menu === "More" && (
                                <div>
                                  <Image
                                    src={"/arrow-down-s-line-black.svg"}
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                  />
                                </div>
                              )}

                              {isToggled === true && (
                                <>
                                  {item?.submenu && (
                                    <ul className="absolute top-[48px] right-0 z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      {item?.submenu?.map((item, ind) => {
                                        return (
                                          <li
                                            key={ind}
                                            className="py-1 hover:bg-[#f9f9f9] text-[15px] font-[400] text-[#000]  block px-4 py-2  "
                                            role="none"
                                            onClick={() =>
                                              toggleMore(item.navlink)
                                            }
                                          >
                                            {item.navlink}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <a
                            onClick={() => toggleMore(item.menu)}
                            className="text-[15px] font-[400] text-[#000] !rounded-lg p-[10px] hover:bg-[#fcf1f5] hover:text-[#ee2c3c]"
                          >
                            {item.menu}
                          </a>
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="flex gap-2">
              {/* <Button text={"Login"} /> */}
              <ModalBox />
              {/* <Button image={true} /> */}
            </div>
          </div>
          {/* for mobile view */}

          <div className="lg:hidden block">
            <Image
              src={mobileMenu === true ? "/close.png" : "/bread.png"}
              alt="bread"
              width={24}
              height={20}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>
        </div>
        {sidebar && (
          <div
            // onMouseLeave={() => setSIdebar(false)}
            className="absolute w-full backdrop-blur-sm"
          >
            <div className="bg-[#fff]  w-fit  z-[9]  flex  sidemenubar ">
              <div className="w-[260px] py-4 overflow-y relative">
                {sideBarArray?.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="border-b-1">
                        <h3 className="text-lg font-semibold my-4 px-4">
                          {item?.title}
                        </h3>
                        {CourseFilter.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                activeTab === item?.value
                                  ? "bg-[#fdbebf] text-[#ea1d22] px-4 flex justify-between cursor-pointer hoverimagecolorchnge"
                                  : "px-4 flex justify-between cursor-pointer"
                              }
                              onClick={() => {
                                setActiveTab(item?.value),
                                  setActiveCourseBranch("");
                                toggleSidebar(item?.value);
                              }}
                              onMouseLeave={() => sideBarClose("")}
                            >
                              <p className="py-[12px]">{item.label}</p>
                              {activeTab === item?.value ? (
                                <Image
                                  src={"/svg/arrow-drop-right-linewhite.svg"}
                                  alt="greater"
                                  width={20}
                                  height={20}
                                />
                              ) : activeTab === "" ? (
                                <>
                                  <Image
                                    src={"/svg/arrow-drop-right-line.svg"}
                                    alt="greater"
                                    width={20}
                                    height={20}
                                  />
                                </>
                              ) : (
                                <>
                                  <Image
                                    src={"/svg/arrow-drop-right-line.svg"}
                                    alt="greater"
                                    width={20}
                                    height={20}
                                  />
                                </>
                              )}{" "}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
                <div className="px-4">
                  <h4 className="font-semibold text-lg mt-4">Still unsure?</h4>
                  <p className="my-2">Try a course for free.</p>
                  <Button
                    text={"Free online courses"}
                    className={
                      "my-4 rounded-none !border-black text-md font-semibold"
                    }
                  />
                </div>
                <Image
                  src={"/close.png"}
                  alt="close"
                  className="absolute top-2 right-2 cursor-pointer"
                  width={18}
                  height={18}
                  onClick={() => setSIdebar(false)}
                />
              </div>
              {pagePartition === true && (
                <div className="max-w-[900px] bg-red overflow-y relative">
                  <div className="absolute bg-[#000] top-4 right-4 cursor-pointer w-[30px] h-[30px] p-[10px] rounded-[100px]">
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      className=""
                      width={20}
                      height={20}
                      onClick={() => setPagePartition(false)}
                      style={{
                        // background: "#000",
                        borderRadius: "50%",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <div>
                    <div className="py-[20px] px-[20px]">
                      <h3 className="text-black text-lg font-semibold">
                        Speeialization
                      </h3>

                      <div className="flex flex-wrap   gap-[10px] gap-y-[5px] my-[10px]">
                        {nestedFilter.map((item, index) => {
                          console.log("chip ko dikho", { item });
                          return (
                            <>
                              <BadgeChip
                                // need to active the chip by default if the value is same as activeCourseBranch value
                                theme={
                                  item?.value == activeCourseBranch
                                    ? "success"
                                    : "default"
                                }
                                size="medium"
                                key={item?.label}
                                onClick={() =>
                                  setActiveCourseBranch(item?.value)
                                }
                                className="cursor-pointer"
                              >
                                {item?.label}
                              </BadgeChip>
                            </>
                          );
                        })}
                      </div>

                      <div className="DegreeCertifications ">
                        <div className="Degree">
                          <h4 className="text-[15px] font-[500] mb-[10px] mt-[15px] text-[#000]">
                            Degree
                          </h4>

                          <div className=" grid grid-cols-2 gap-[10px]">
                            {degreearry?.map((item, index) => {
                              return (
                                <>
                                  <SideMenuCardbox
                                    key={index}
                                    activeTab={activeTab}
                                    activeCourseBranch={activeCourseBranch}
                                  />
                                </>
                              );
                            })}
                          </div>

                          <a className=" block text-center text-[#ed1e27] text-[15px] font-[500] mt-[15px] align-center">
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {mobileMenu && (
          <div className="w-screen h-[80vh] px-8 bg-white overflow-y-auto">
            <div className="bg-[#f9f9f9]">
              <ul className="p-4">
                {mobileMenuArray?.map((value, index) => {
                  return (
                    <div key={index}>
                      <li className="py-4">{value.menu}</li>
                      <ul className="p-4 bg-white">
                        {value?.subMenu?.map((item, ind) => {
                          return <li key={ind}>{item.subMenuList}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      {mobileMenu && (
        <div className="w-screen h-[80vh] px-8 bg-white overflow-y-auto">
          <div className="bg-[#f9f9f9]">
            <ul className="p-4">
              {mobileMenuArray?.map((value, index) => {
                return (
                  <div key={index}>
                    <li className="py-4">{value.menu}</li>
                    <ul className="p-4 bg-white">
                      {value?.subMenu?.map((item, ind) => {
                        return <li key={ind}>{item.subMenuList}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
const menuArray = [
  {
    menu: "Study Abroad",
  },

  {
    menu: "Career Support",
  },
  {
    menu: "More",
    submenu: [
      { navlink: "About Us" },
      { navlink: "Free Master Class" },
      { navlink: "Blog" },
      { navlink: "Webinars" },
      { navlink: "Contact us" },
    ],
  },
];
const mobileMenuArray = [
  {
    menu: "Home",
    subMenu: [
      {
        subMenuList: "eLearning School",
      },
      {
        subMenuList: "Vendor Certification eTraining",
      },
      {
        subMenuList: "Online Training School",
      },
      {
        subMenuList: "eLearning School",
      },
      {
        subMenuList: "Distance Learning",
      },
      {
        subMenuList: "Kitchen Coach",
      },
    ],
  },
  {
    menu: "Courses",
    subMenu: [
      {
        subMenuList: "Courses Basic Grid",
      },
      {
        subMenuList: "Free Course Single",
      },
      {
        subMenuList: "Paid Course Single",
      },
      {
        subMenuList: "Courses Modern Grid",
      },
      {
        subMenuList: "Sticky Sidebar Course Single",
      },
      {
        subMenuList: "Courses Right Sidebar",
      },
    ],
  },
  {
    menu: "Pages",
    subMenu: [
      {
        subMenuList: "About Us",
      },
      {
        subMenuList: "Instructor",
      },
      {
        subMenuList: "Success Stories",
      },
    ],
  },
];
const sideBarArray = [
  {
    title: "Explore Courses",
    list: [
      {
        key: true,
        listItem: "Masters",
      },
      {
        key: true,

        listItem: "Bachelors ",
      },
      {
        key: true,
        listItem: "Certificate",
      },
      {
        key: true,
        listItem: "Free Courses",
      },
    ],
  },
];

const degreearry = [
  {
    logo: "/logo/IBM-Logo-Blk---Square.png",
    logoname: "IBM",
    titlename: "Python for Data Science, AI & Development",
  },
  {
    logo: "/logo/uc-chile360x360.png",
    logoname: "Pontificia Universidad Católica de Chile",
    titlename: "English for Common Interactions in the Workplace: Basic Level",
  },
  {
    logo: "/logo/square_logo_large.png",
    logoname: "Yale University",
    titlename: "Introduction to Psychology",
  },
  {
    logo: "/logo/JHU-Logo-Square-Mini_180px.png",
    logoname: "Johns Hopkins University",
    titlename: "Business Analytics with Excel: Elementary to Advanced",
  },
];
