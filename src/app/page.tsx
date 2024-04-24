import Image from "next/image";
import React from "react";
import Button from "./components/button/Button";
import LogoSlider from "./components/logoslider";
import BestCourses from "./components/bestCourses";
import Banner from "./components/banner/banner";
import CoursesBox from "./components/courses-box/courses-box";
import ReviewSlider from "./components/review-slider/review-slider";
import LatestNews from "./components/latest-news/latest-news";
import RecruitersSlider from "./components/logoslider/Recruiters";
import NewsSlider from "./components/logoslider/News";
import AbroadCourses from "./components/Abroad";
import FreeCoursesSlider from "./components/free-courses/free-courses";
import HeaderLayout from "./components/headerLayout/HeaderLayout";
import Blog from "@/app/models/blogModels";
import { connect } from "./dbConfig";
import News from "./models/newsModels";

const getAllBlogs = async () => {
  try {
    connect();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    return error;
  }
};

const getAllNews = async () => {
  try {
    connect();
    const news = await News.find();
    return news;
  } catch (error) {
    return error;
  }
};

const page = async () => {
  const response: any = await getAllBlogs();
  const responseNews: any = await getAllNews();

  

  return (
    <HeaderLayout>
      <div>
        <Banner />
      </div>

      <LogoSlider />
      <BestCourses />

      <AbroadCourses />
      <div className="bg-[url('/blue-bg.png')] bg-contain">
        <div className="md:max-w-[1230px] w-[100%] mx-auto px-[15px] py-12 grid lg:grid-cols-3 md:grid-cols-2     gap-10">
          <div className="flex gap-6 items-center">
            <div>
              <Image src="/learn.png" alt="learn" width={60} height={60} />
            </div>
            <h3 className="sm:text-2xl text-md tracking-wide font-semibold text-white flex-1">
              Learn with skills over <br /> 2,420 courses
            </h3>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <Image
                src="/certificate.png"
                alt="learn"
                width={60}
                height={60}
              />
            </div>
            <h3 className="sm:text-2xl text-md tracking-wide font-semibold text-white flex-1">
              Earn certificates and degrees
            </h3>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <Image src="/anywhere.png" alt="learn" width={60} height={60} />
            </div>
            <h3 className="sm:text-2xl text-md tracking-wide font-semibold text-white flex-1">
              Learn from anywhere, any time
            </h3>
          </div>
        </div>
      </div>
      <div className="  my-12 lg:px-0 px-6">
        <div className="md:flex justify-between mb-8 md:max-w-[1200px] w-[100%] mx-auto px-[15px]">
          <div>
            <h2 className="text-3xl font-semibold text-[#21225F] mb-4">
              Top categories
            </h2>
            <p>
              Explore all of our courses and pick your suitable ones to enroll
              and start learning with us!
            </p>
          </div>
          <div className="md:mt-0 mt-8">
            <button className="px-6 py-2 border text-[#000] border-[#000]  !rounded-[0px] hover:bg-[#000] hover:text-[#fff]">
              View All Categories
            </button>
          </div>
        </div>
        <section className="my-12">
          <CoursesBox />
        </section>
        <section>
          <div className="lg:flex grid gap-10 md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
            <div className="relative">
              <Image src={"/girl.jpg"} alt="image" width={630} height={270} />
              <div className="absolute sm:top-[20%] top-[2%] left-[3%] ">
                <span className="font-semibold text-md text-[#2467ec]">
                  Start from today
                </span>
                <h3 className="font-semibold md:text-xl text-md md:mt-4 mt-2 md:mb-6 mb-2">
                  Become an instructor and <br /> spread your knowledge
                </h3>
                <button className="bg-[#2467EC] text-white px-6 py-2 rounded-md">
                  View details
                </button>
              </div>
            </div>
            <div className="relative">
              <Image src={"/cpl.jpg"} alt="image" width={630} height={270} />
              <div className="absolute sm:top-[20%] top-[2%] left-[3%] ">
                <span className="font-semibold text-md text-[#2467ec]">
                  Discover your gain
                </span>
                <h3 className="font-semibold md:text-xl text-md md:mt-4 mt-2 md:mb-6 mb-2">
                  Keep your skilled centers of <br /> excellence competitive
                </h3>
                <button className="bg-[#2467EC] text-white px-6 py-2 rounded-md">
                  Browse courses
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="my-12 md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <h2 className="text-center text-3xl font-semibold">
            What Students <br />
            Think and Say About Eduman
          </h2>
          <ReviewSlider />
        </div>
        <div className="my-12 md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <h2 className="text-center text-3xl font-semibold">
            Start with our Free Courses
          </h2>
          <p className="my-2 text-center">
            Earn certifications by upskilling with 750+ Hours of learning
            content taught by <br /> academic and industry experts
          </p>
          <FreeCoursesSlider />
          <div>
            <Button
              text={"View All Free Courses"}
              className={
                "px-6 py-4 border text-[#fff] !border-[#000] bg-black !rounded-md m-auto"
              }
            />
          </div>
        </div>
        <div>
          <LatestNews response={response} />
        </div>
      </div>

      <div className="my-[30px] md:max-w-[1200px] w-[100%] mx-auto px-[15px]  ">
        <Image src="/attendimage.png" width={1200} height={200} alt="" />
      </div>

      <div className="block md:grid  grid-cols-2 md:max-w-[1200px] w-[100%] mx-auto px-[15px] mb-[30px]">
        <div className="w-[100%]">
          <div>
            <h2 className="text-3xl font-semibold mb-[16px] text-center">
              edu<span className="text-[red]">XLL</span> in the News
            </h2>
            <NewsSlider response={responseNews} />
          </div>
        </div>
        <div className="w-[100%]">
          <div>
            <h2 className="text-3xl font-semibold mb-[16px] text-center">
              Our Top Recruiters
            </h2>
            <RecruitersSlider response={response} />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default page;
