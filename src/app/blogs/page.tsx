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
      <div className="h-[400px] master-banner relative bg-[url('/master.webp')] bg-no-repeat bg-cover pr-12 pl-32 py-8">
        <div className="flex gap-2 text-white">
          <Link href={"/"} className="cursor-pointer text-[#dbd8d8]">
            Home
          </Link>
          <span> {">"} </span>
          <span>Free Masterclass</span>
        </div>
        <div className="absolute bottom-[-30px] z-[9]">
          <div className="text-white max-w-[720px] px-20 grid gap-6">
            <h2 className="text-3xl font-semibold">
              LIVE LEARNING FOR CAREER GROWTH
            </h2>
            <p>
              Are you someone who is - Feeling stuck in your job? Ambitious to
              continue learning? Not sure what’s next for you in your career?
              Our FREE masterclasses with leading industry leaders is exactly
              what you need!
            </p>
            <button className="bg-red-500 w-fit px-16 py-4 rounded-md font-semibold tracking-wide">
              REGISTER NOW
            </button>
          </div>
          <div className="bg-white max-w-[1140px] ml-20 h-[100px] rounded-md shadow-md text-black grid grid-cols-4 gap-4 py-4 px-8 font-semibold mt-4">
            <span>FREE registration</span>
            <span>
              Best-in-class industry <br /> experts
            </span>
            <span>Live hands-on learning</span>
            <span>1-1 career counselling</span>
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
