"use client";
import Image from "next/image";
import Button from "../../button/Button";
import ModalBox from "../../modal-box/modal-box";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {/* <div className="relative bg-[#eaeaea] py-2">
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
      </div> */}
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
            <Button
              notesImage
              dropdownImage
              text={"Course"}
              className={"bg-[#d35b5b] text-white rounded-xl lg:flex hidden"}
            />
          </div>
          <div className="lg:flex hidden gap-8 items-center">
            <div className="font-[500] text-sm">
              <ul className="flex gap-4">
                {menuArray?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer text-lg font-normal flex items-center gap-2"
                    >
                      {item.menu}
                      {item.menu === "More" && (
                        <div>
                          <Image
                            src={"/downBlack.png"}
                            alt="dropdown"
                            width={16}
                            height={16}
                          />
                        </div>
                      )}
                    </li>
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
