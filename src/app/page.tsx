import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import TabPills from "./components/pills/pills";
import Card from "./components/card/cards";
import Button from "./components/button/Button";
import AchievingCard from "./components/achieving-card/achieving-card";
import SpotlightCard from "./components/spotlight-card/spotlight-card";
import CoursesCard from "./components/course-card/courses-card";
import LogoSlider from "./components/logoslider";
import BestCourses from "./components/bestCourses";
import Banner from "./components/banner/banner";
import CoursesBox from "./components/courses-box/courses-box";
import ReviewSlider from "./components/review-slider/review-slider";
import LatestNews from "./components/latest-news/latest-news";
import RecruitersSlider from "./components/logoslider/Recruiters";
import NewsSlider from "./components/logoslider/News";

const page = () => {
  return (
    <>
      <div>
        {/* <Image
          src={"/banner.jpg"}
          alt="banner"
          width={1600}
          height={850}
          className="w-full"
        /> */}
        <Banner />
        {/* <div className=" my-16">
          <div className="max-w-[1000px] m-auto border rounded-xl shadow-xl p-12 grid grid-cols-3 text-center">
            <div className="border-r-2">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-800 font-semibold text-3xl mb-2">
                10 Million+
              </h3>
              <p>Learners Have Trusted Us</p>
            </div>
            <div className="border-r-2">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-800 font-semibold text-3xl mb-2">
                50%
              </h3>
              <p>Average Salary Hike</p>
            </div>
            <div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-800 font-semibold text-3xl mb-2">
                83%
              </h3>
              <p>Happy with Outcome</p>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto my-20">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Our Knowledge Partners
            </h3>
            <Marquee>
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <Image
                src={"/companyLogo.png"}
                alt="logo"
                width={120}
                height={120}
                className="mr-6"
              />
            </Marquee>
          </div>
          <div className="max-w-[1000px] m-auto">
            <h3 className="text-center font-semibold text-4xl">
              Aage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500">
                {" "}
                Ki Socho{" "}
              </span>
            </h3>
            <p className="text-center mt-4 font-[500]">
              Discover in-demand courses across industries
            </p>
            <div className="flex gap-4 border-b mt-6">
              <div className="border-b-2 border-black cursor-pointer text-black font-semibold">
                Courses
              </div>
              <div className="cursor-pointer">IT Certifications</div>
              <div className="cursor-pointer">Leadership</div>
              <div className="cursor-pointer">Data Science</div>
              <div className="cursor-pointer">Communication</div>
              <div className="cursor-pointer">
                Business Analytics & Intelligence
              </div>
            </div>
            <div className="flex gap-4 py-8 bg-[#f2f2f2] px-2 rounded-md">
              <TabPills active={true} heading={"MBA"} text={"15M+ Learners"} />
              <TabPills heading={"MBBS"} text={"7.2M+ Learners"} />
              <TabPills heading={"M.Phill"} text={"2.7M+ Learners"} />
              <TabPills heading={"LLB"} text={"7M+ Learners"} />
              <TabPills heading={"B.Pharma"} text={"8.6M+ Learners"} />
              <TabPills heading={"M.Pharma"} text={"5.8M+ Learners"} />
              <TabPills heading={"BCA"} text={"3.9M+ Learners"} />
            </div>
            <div className="mt-6">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold">
                  MBA <span className="text-[#b6b2b2]">(16)</span>
                </h4>
                <span className="text-red-500 font-semibold">View All</span>
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto my-10">
            <div className="grid grid-cols-3 gap-4">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="my-20 grid grid-cols-[1fr_2.5fr] items-center bg-white">
              <div>
                <h2 className="text-sm text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500">
                  EARN CERTIFICATES FROM
                </h2>
                <h3 className="text-4xl font-semibold my-4">
                  Prestigious <br />
                  universities
                </h3>
                <p className="text-xs text-[#bec5be]">
                  We partner with world-renowned universities so you earn
                  certificates recognised by organisations across the globe.
                </p>
                <Button
                  text={"VIEW ALL UNIVERSITIES"}
                  className={
                    "bg-blue-500 border-0 text-white text-xs mt-6 rounded-none py-4 px-6"
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
                <Image src={"/uni.png"} alt="uni" width={200} height={80} />
              </div>
            </div>
          </div>
          <div className="bg-[#ebebeb] rounded-md p-4 pb-8">
            <div className="max-w-[1000px] m-auto">
              <h3 className="text-3xl font-semibold my-6">
                See what others areachieving through learning
              </h3>
              <div className="flex gap-4">
                <AchievingCard />
                <AchievingCard />
                <AchievingCard />
                <AchievingCard />
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto my-4">
            <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500">
              FEATURED IN
            </h3>
            <h4 className="text-center font-semibold text-4xl my-4">
              Media Spotlight
            </h4>
            <div className="flex gap-4 mt-8">
              <SpotlightCard />
              <SpotlightCard />
              <SpotlightCard />
              <SpotlightCard />
            </div>

            <div className="my-10">
              <h3 className="text-4xl font-semibold text-center">
                Start with our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500">
                  {" "}
                  Free Courses{" "}
                </span>
              </h3>
              <p className="max-w-[550px] text-center m-auto mt-4 text-[#b1acac]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto, voluptatem est. Est soluta dolores fuga sint!
              </p>
              <div className="flex gap-4 mt-8">
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
              </div>
              <div className="text-center mt-10">
                <Button
                  text={"View All Free Courses"}
                  className={"bg-black text-white text-sm border-none py-3"}
                />
              </div>
            </div>
            <div className="my-10 max-w-[1000px] bg-[#f7ebc6] grid grid-cols-[2fr_1fr] items-center rounded-xl p-8">
              <div>
                <h3 className="text-4xl font-semibold">Got More Quetions?</h3>
                <p className="text-sm mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias nobis labore fugit!
                </p>
              </div>
              <div>
                <Button
                  text={"Contact us"}
                  className={
                    "bg-black text-yellow-500 border-0 px-10 py-4 text-xl"
                  }
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <LogoSlider />
      <BestCourses />
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
            <button className="px-6 py-2 border border-blue-700">
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
        <div>
          <LatestNews />
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
            <NewsSlider />
          </div>
        </div>
        <div className="w-[100%]">
          <div>
            <h2 className="text-3xl font-semibold mb-[16px] text-center">
              Our Top Recruiters
            </h2>
            <RecruitersSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
