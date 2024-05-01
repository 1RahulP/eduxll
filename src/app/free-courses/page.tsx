import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import { Input } from "@nextui-org/react";
import Button from "../components/button/Button";
import FreeOnlineCourses from "../components/free-online-courses/free-online-courses";
import WebinarSlider from "../components/upcoming-webinar/webinar-slider";
import ReviewSlider from "../components/review-slider/review-slider";

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
          <p className="text-xs mt-2 text-gray-500">
            We'll send an OTP for verification.
          </p>
          <Button
            text={"Join for free"}
            className={
              "bg-[#555f70] border-none text-white !rounded-md w-full flex justify-center py-4 font-semibold mt-8"
            }
          />
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
        <div className="my-16">
          <h3 className="text-3xl font-semibold text-center">
            Register for Upcoming Webinars
          </h3>
          <WebinarSlider />
        </div>
        <div className="my-16">
          <h2 className="text-3xl font-semibold text-center">Popular Topics to explore on Great Learning Academy</h2>
          <div className="grid grid-cols-4 gap-4 py-4 mt-4">
            {topicsollection?.map((item,index)=>{
              return(
                <div key={index} className="flex gap-4 items-center shadow-xl p-4 border rounded-xl cursor-pointer">
                  <span className={`${item?.color} block w-8 h-8 rounded-md`}></span>
                  <p>{item?.topic}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="bg-purple-900 py-8 my-12">
        <div className="text-white max-w-[900px] m-auto flex gap-4">
          <div>
            <Image src={"/refer.png"} alt="refer" width={100} height={100} />
          </div>
          <div>
            <h2 className="text-2xl">Refer and Earn</h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, iure.
            </p>
            <Button
              text={"Refer Now"}
              className={"bg-white !rounded-md text-black border-0 mt-4"}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto">
      <div className="my-12">
          <h2 className="text-center text-3xl font-semibold">
           Success Stories
          </h2>
          <ReviewSlider />
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
const topicsollection = [
  {
    topic:"ChatGPT",
    color:"bg-pink-600"
  },
  {
    topic:"AI",
    color:"bg-blue-600"
  },
  {
    topic:"Data Science",
    color:"bg-orange-600"
  },
  {
    topic:"Microsoft Excel",
    color:"bg-green-600"
  },
  {
    topic:"Python",
    color:"bg-red-600"
  },
  {
    topic:"Machine Learning",
    color:"bg-pink-600"
  },
  {
    topic:"CyberSecurity",
    color:"bg-blue-600"
  },
  {
    topic:"SQL",
    color:"bg-orange-600"
  },
  
]