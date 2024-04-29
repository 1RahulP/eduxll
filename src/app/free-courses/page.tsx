import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import { Input } from "@nextui-org/react";
import Button from "../components/button/Button";
import FreeOnlineCourses from "../components/free-online-courses/free-online-courses";

const FreeCourses = () => {
  return (
    <HeaderLayout>
      <div className="grid grid-cols-2 items-center gap-12 py-12 max-w-[1140px] m-auto">
        <div>
          <h2 className="font-semibold text-5xl">
            Crack your goal with India’s top educators
          </h2>
          <p className="font-semibold mt-4">
            Over <span className="text-green-600"> 10 crore</span> learners
            trust us for their preparation
          </p>
          <div className="border border-black rounded-xl mt-6">
            <Input placeholder="Enter your mobile number" />
          </div>
          <p className="text-xs mt-2 text-gray-500">We'll send an OTP for verification.</p>
          <Button text={"Join for free"} className={"bg-[#555f70] border-none text-white !rounded-md w-full flex justify-center py-4 font-semibold mt-8"} />
        </div>
        <div>
          <Image
            src="/courses-banner.svg"
            alt="banner"
            width={560}
            height={333}
          />
        </div>
      </div>
      <div className="max-w-[1200px] m-auto my-12">
        <h2 className="text-center text-4xl font-semibold mb-6">
          Explore Free Online Courses
        </h2>
        <div>
          <div className="flex font-semibold gap-6">
            {freeCoursesTabs?.map((item, index) => {
              return (
                <p className="cursor-pointer" key={index}>
                  {item?.tabs}
                </p>
              );
            })}
          </div>
            <FreeOnlineCourses />
        </div>
      </div>
    </HeaderLayout>
  );
};
export default FreeCourses;
const freeCoursesTabs = [
  {
    tabs: "Browse By Domains",
  },
  {
    tabs: "View All",
  },
  {
    tabs: "Data Science",
  },
  {
    tabs: "Development",
  },
  {
    tabs: "Business",
  },
  {
    tabs: "Life Styles",
  },
];
