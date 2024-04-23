import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";
import LatestNews from "../components/latest-news/latest-news";
import { connect } from "../dbConfig";
import Blog from "../models/blogModels";



const Blogs =async () => {
// eslint-disable-next-line @next/next/no-async-client-component
const getAllBlogs = async () => {
    try {
      connect();
      const blogs = await Blog.find();
      return blogs;
    } catch (error) {
      return error;
    }
  };
const response: any = await getAllBlogs();

  

  return (
    <HeaderLayout>
       <div className="h-[400px] master-banner relative bg-[url('/master.webp')] bg-no-repeat bg-cover">
        <div className="sm:pr-12 pr-4 lg:pl-32 pl-4 py-8 bg-gradient-to-r from-black to-transparent h-full">
        <div className="flex gap-2 text-white">
          <Link href={"/"} className="cursor-pointer text-[#dbd8d8]">
            Home
          </Link>
          <span> {">"} </span>
          <span>Free Masterclass</span>
        </div>
        <div className="sm:absolute bottom-[-30px] z-[9]">
          <div className="text-white max-w-[720px] lg:px-20 sm:pl-8 pl-2 sm:mt-0 mt-4 grid sm:gap-6 gap-2">
            <h2 className="sm:text-3xl text-xl font-semibold">
              LIVE LEARNING FOR CAREER GROWTH
            </h2>
            <p className="sm:text-md text-sm">
              Are you someone who is - Feeling stuck in your job? Ambitious to
              continue learning? Not sure what’s next for you in your career?
              Our FREE masterclasses with leading industry leaders is exactly
              what you need!
            </p>
            <button className="bg-red-500 w-fit sm:px-16 px-4 sm:py-4 py-2 rounded-md sm:font-semibold tracking-wide">
              REGISTER NOW
            </button>
          </div>
          <div className="bg-white max-w-[1140px] lg:ml-20 sm:mx-8 mx-2 md:h-[100px] rounded-md shadow-md text-black grid md:grid-cols-4 grid-cols-2 gap-4 py-4 md:px-8 px-4 font-semibold mt-4 md:text-[16px] text-xs">
            <span>FREE registration</span>
            <span>
              Best-in-class industry  experts
            </span>
            <span>Live hands-on learning</span>
            <span>1-1 career counselling</span>
          </div>
        </div>
        </div>
      </div>
      <div className="my-16">
      <LatestNews response={response} />
      </div>

    </HeaderLayout>
  );
};
export default Blogs;
