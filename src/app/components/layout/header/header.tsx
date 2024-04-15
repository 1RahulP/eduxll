"use client";
import Image from "next/image";
import Button from "../../button/Button";
import ModalBox from "../../modal-box/modal-box";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [color, setColor] = useState("");
  const [sidebar, setSIdebar] = useState(false);
  const [pagePartition, setPagePartition] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };
  const toggleSidebar = (val: any) => {
    setColor(val);
    setPagePartition(true);
  };
  const sideBarClose = (value: any) => {
    setColor("");
  };
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
      <div className="sticky top-0 z-[9]">
        <div className="flex p-2 px-8 justify-between items-center  shadow-md custom-bg z-[9] border-b">
          <div className="flex items-center gap-8">
            <div>
              <Image src={"/logo.webp"} alt="close" width={160} height={50} />
            </div>
            {/* <div className="p-2 shadow-xl text-center border rounded-t-2xl">
            <p className="text-xl font-semibold">5</p>
            <p className="text-sm text-[#adadad]"> YEARS</p>
          </div> */}
            <div onMouseEnter={() => setSIdebar(true)}>
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
                            onMouseEnter={() => setIsToggled(true)}
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
                                    <ul
                                      onMouseLeave={() => setIsToggled(false)}
                                      className="absolute top-[48px] right-0 z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                      {item?.submenu?.map((item, ind) => {
                                        return (
                                          <li
                                            key={ind}
                                            className="py-1 hover:bg-[#f9f9f9]"
                                            role="none"
                                          >
                                            <a
                                              href="#"
                                              className="text-gray-700 block px-4 py-2 text-sm"
                                            >
                                              {item.navlink}
                                            </a>
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
            onMouseLeave={() => setSIdebar(false)}
            className="absolute w-full backdrop-blur-sm"
          >
            <div className="bg-[#f9f9f9] h-[92vh] w-fit  z-[9] top-[65px] flex ">
              <div className="w-[260px] py-4 overflow-y-scroll relative">
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
                              className={`flex justify-between cursor-pointer mb-2 px-4 ${
                                color === val.listItem
                                  ? " bg-blue-800 text-white"
                                  : ""
                              }`}
                              onMouseEnter={() => toggleSidebar(val.listItem)}
                              onMouseLeave={() => sideBarClose("")}
                            >
                              <p className="py-4">{val.listItem}</p>
                              {val.key === true && (
                                <Image
                                  src={"/greater.svg"}
                                  alt="greater"
                                  width={8}
                                  height={12}
                                />
                              )}
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
                <div className="w-[800px] bg-red overflow-y-scroll relative">
                  <Image
                    src={"/close.svg"}
                    alt="close"
                    className="absolute top-4 right-4 cursor-pointer"
                    width={18}
                    height={18}
                    onClick={() => setPagePartition(false)}
                  />

                  <div>
                    <div className="bg-[#1f453d] p-6">
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
                    <div></div>
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
      { navlink: "about us " },
      { navlink: "Free Master Class " },
      { navlink: "Blog" },
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
    title: "By topic",
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
