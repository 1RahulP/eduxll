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

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [color, setColor] = useState("");
  const [sidebar, setSIdebar] = useState(false);
  const [pagePartition, setPagePartition] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const [moreMenu,setMoreMenu] = useState("")
  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };

  const toggleMore = (item:string) =>{
    // console.log(item,"console");
      item=== "Free Master Class" && router.push("/free-masterclass");
      item=== "Webinars" && router.push("/webinars");
      item=== "Blog" && router.push("/blogs");
      item=== "about us" && router.push("/about-us");
      item=== "Contact us" && router.push("/contact-us");
  }
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
  const activeTab = (item: any) => {
    setfilteractive(item);
  };
  const router = useRouter();

  return (
    <>
      <div className="relative bg-[#eaeaea] py-2">
        <h2 className="text-center text-sm font-semibold">
          Aage ki sochni hai? Enjoy Complimentary Career Counselling{" "}
          <span className="text-red-500 cursor-pointer">Claim Now!</span>
        </h2>
        <Image
          src={"/svg/close.svg"}
          alt="close"
          width={14}
          height={14}
          className="absolute right-3 top-2 cursor-pointer"
        />
      </div>
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
                className={"bg-[#d35b5b] text-white rounded-xl lg:flex hidden"}
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
                        onClick={() => setIsToggled(!isToggled)}
                      >
                        {item.menu === "More" ? (
                          <div
                            className="flex items-center"
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
                                            className="py-1 hover:bg-[#f9f9f9] text-gray-700 block px-4 py-2 text-sm"
                                            role="none"
                                            onClick={()=>toggleMore(item.navlink)}
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
                          <div>{item.menu}</div>
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
                        {item?.list.map((val, ind) => {
                          return (
                            <div
                              key={ind}
                              className={`flex justify-between cursor-pointer   px-4 ${
                                color === val.listItem
                                  ? " bg-[#fdbebf] text-[#ea1d22]  hoverimagecolorchnge"
                                  : ""
                              }`}
                              onMouseEnter={() => toggleSidebar(val.listItem)}
                              onMouseLeave={() => sideBarClose("")}
                            >
                              <p className="py-[12px]">{val.listItem}</p>
                              {val.key === true &&
                                (color === val.listItem ? (
                                  <>
                                    {" "}
                                    <Image
                                      src={
                                        "/svg/arrow-drop-right-linewhite.svg"
                                      }
                                      alt="greater"
                                      width={20}
                                      height={20}
                                    />
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <Image
                                      src={"/svg/arrow-drop-right-line.svg"}
                                      alt="greater"
                                      width={20}
                                      height={20}
                                    />
                                  </>
                                ))}
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
                  <Image
                    src={"/close.svg"}
                    alt="close"
                    className="absolute top-4 right-4 cursor-pointer"
                    width={18}
                    height={18}
                    onClick={() => setPagePartition(false)}
                  />

                  <div>
                    <div className="bg-[#1f453d] py-[20px] px-[20px]">
                      <h3 className="text-white text-2xl font-semibold">
                        Career resources
                      </h3>
                      <p className="text-white my-2 text-sm">
                        Degree programs from top institutions around the world
                        to enable your career transformation and advancement.
                      </p>
                      <Button
                        text={"View all Degrees"}
                        className={"text-white bg-red-500 rounded-none mt-4"}
                      />
                    </div>
                    <div className="py-[20px] px-[20px]">
                      <h3 className="text-black text-2xl font-semibold">
                        Speeialization
                      </h3>

                      <div className=" px-[20px] mt-[10px] mb-[20px]">
                        <div className=" relative tabsliderlayout ">
                          <Slidernav1 navsize="25" navfix="2" />

                          <Swiper
                            slidesPerView="auto"
                            spaceBetween={15}
                            className="mySwiper2 width-100 !px-[15px]"
                            navigation={{
                              nextEl: ".review2-swiper-button-next",
                              prevEl: ".review2-swiper-button-prev",
                            }}
                            modules={[Navigation]}
                          >
                            {speeializationtab.map((item, index) => {
                              return (
                                <>
                                  <SwiperSlide>
                                    <div
                                      key={index}
                                      onClick={() => activeTab(item)}
                                      className={`${
                                        filteractive?.speeialglistItem ===
                                        item.speeialglistItem
                                          ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                                          : ""
                                      } `}
                                    >
                                      {item.speeialglistItem}
                                    </div>
                                  </SwiperSlide>
                                </>
                              );
                            })}
                          </Swiper>
                        </div>
                      </div>

                      <div className="flex flex-wrap   gap-[10px] gap-y-[5px] my-[10px]">
                        {speeializationtab.map((item, index) => {
                          return (
                            <>
                              <BadgeChip theme="default" size="medium">
                                {item.speeialglistItem}
                              </BadgeChip>
                            </>
                          );
                        })}
                      </div>

                      <div className="DegreeCertifications grid grid-cols-2 gap-[10px]">
                        <div className="Degree">
                          <h4 className="text-[15px] font-[500] mb-[10px] mt-[15px] text-[#000]">
                            Degree
                          </h4>

                          <div className=" grid grid-cols-1 gap-[10px]">
                            {degreearry?.map((item, index) => {
                              return (
                                <>
                                  <SideMenuCardbox
                                    key={index}
                                    logoimage={item.logo}
                                    logoname={item.logoname}
                                    titlename={item.titlename}
                                  />
                                </>
                              );
                            })}
                          </div>

                          <a className=" block text-center text-[#ed1e27] text-[15px] font-[500] mt-[15px] align-center">
                            View All
                          </a>
                        </div>
                        <div className="Certifications">
                          <h4 className="text-[15px] font-[500] mb-[10px] mt-[15px] text-[#000]">
                            Certifications
                          </h4>
                          <div className=" grid grid-cols-1 gap-[10px]">
                            {certificationsearry?.map((item, index) => {
                              return (
                                <>
                                  <SideMenuCardbox
                                    key={index}
                                    logoimage={item.logo}
                                    logoname={item.logoname}
                                    titlename={item.titlename}
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
      { navlink: "about us" },
      { navlink: "Free Master Class" },
      { navlink: "Blog" },
      {navlink: "Webinars"},
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
    title: "By Goal",
    list: [
      {
        key: false,
        listItem: "Take a course",
      },
      {
        key: true,
        listItem: "Earn a certificate",
      },
      {
        key: true,

        listItem: "Earn a degree",
      },
    ],
  },
  {
    title: "By Topic",
    list: [
      {
        key: true,

        listItem: "Artificial Intelligence",
      },
      {
        key: true,

        listItem: "Data Science",
      },
      {
        key: true,

        listItem: "Finance",
      },
      {
        key: true,

        listItem: "Business Administration",
      },
      {
        key: true,

        listItem: "Cybersecurity",
      },
      {
        key: true,

        listItem: "Computer Science",
      },
      {
        key: true,

        listItem: "View all topics",
      },
    ],
  },
  {
    title: "",
    list: [
      {
        key: true,

        listItem: "Career resources",
      },
      {
        key: false,
        listItem: "Schools & Partners",
      },
    ],
  },
];

const speeializationtab = [
  { speeialglistItem: "Artificial Intelligence" },
  { speeialglistItem: "Data Science" },
  { speeialglistItem: "Finance" },
  { speeialglistItem: "Business Administration" },
  { speeialglistItem: "Cybersecurity" },
  { speeialglistItem: "Computer Science" },
  { speeialglistItem: "View all topics" },
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
const certificationsearry = [
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
