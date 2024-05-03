import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Link from "next/link";
import AbroadCourses from "../components/Abroad";
import ProgramsDropdown from "../components/programs-dropdown/program-dropdown";
import SuccessStories from "../components/success-stories/success-stories";
import AbroadUniveritySlider from "../components/abroad-university-slider/abroad-university-slider";
import Button from "../components/button/Button";
import FaqComponent from "../components/faq/faq-abroad";
import AbroadWebinarSlider from "../components/abroad-webinar-slider/abroad-webinar-cards";
import { connect } from "../dbConfig";
import Web from "../models/webinar";
import BlogsSlider from "../components/blogs-slider/blogs-slider";

const getAllClassess = async () => {
  try {
    connect();
    const freeMaterClassess = await Web.find();
    console.log(freeMaterClassess, "hii");
    return freeMaterClassess;
  } catch (error) {
    return error;
  }
};
const Courses = async () => {
  const response = await getAllClassess();
  console.log(response, "hii");
  return (
    <HeaderLayout>
      <div className="bg-[#00000005]">
        <div className="max-w-[1280px] m-auto grid grid-cols-2">
          <div className="p-8">
            <div className="flex gap-2 items-center text-sm ">
              <span>Great Learning</span>
              <span>&gt;</span>
              <span>Study Abroad Courses</span>
            </div>
            <h1 className="text-[42px] font-semibold mt-8 mb-4">
              Study Abroad Programs
            </h1>
            <p>
              Study Abroad Programs combine virtual learning with on-campus
              learning in the USA or Germany. Get the best of both worlds and
              gain invaluable knowledge and cultural experience. Enhance your
              qualifications and make the most of your study abroad journey
            </p>
            <div className="grid gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <span className="bg-[#FFBF00] flex justify-center w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/dollar.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>Save upto 1/3rd of your degree cost</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#34B742] w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/check-white.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>No GRE/TOEFL required</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#4E3CD1] w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/workload.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>Get Post Study Work visa in the USA or Germany</span>
              </div>
              <div className="p-4 bg-white border rounded-md">
                <div className="bg-[#FFBF00] text-xs flex w-fit p-2 gap-2">
                  <Image
                    src="/svg/alarm.svg"
                    alt="alarm"
                    width={18}
                    height={18}
                  />
                  <span> limited time offer</span>
                </div>
                <h2>
                  Get a{" "}
                  <span className="text-[#B37000]"> Comprehensive Guide</span>{" "}
                  on Studying in the US with a{" "}
                  <span className="text-[#B37000]">
                    {" "}
                    1 : 1 Counselling for FREE
                  </span>
                </h2>
              </div>
              <div className="flex gap-2 text-sm font-semibold tracking-wide">
                <Image
                  src={"/svg/call.svg"}
                  alt="call"
                  width={20}
                  height={16}
                />
                <Link href={"+918069451380"}>ENQUIRE: 08069451380 </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-[716px] rounded-full h-[616px] bg-[#FFB333] block relative">
              <Image
                src={"/png/man.png"}
                alt="man"
                width={450}
                height={650}
                className="h-auto absolute bottom-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto">
        <div className="my-12 mb-4">
          <h2 className="text-4xl font-semibold">
            Discover Study Abroad Programs
          </h2>
          <div className="mt-10 mb-4">
            <span className="font-[450] mr-2">Domain:</span>
            <ProgramsDropdown />
          </div>
          <AbroadCourses onlyCards={true} />
        </div>
        <div className="my-12">
          <h2 className="text-4xl font-semibold mb-2">
            Growth and Success Stories
          </h2>
          <p>Know the upGrad Abroad impact</p>
          <div>
            <SuccessStories />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Study Abroad Destinations
          </h2>
          <div className="relative flex gap-4">
            {abroadArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl w-[410px] h-[220px] cursor-pointer hover:shadow-xl"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={item?.imageUrl}
                      alt="usa"
                      width={410}
                      height={220}
                    />
                  </div>
                  <h3 className="absolute bottom-0 text-white font-semibold text-xl p-2 w-[410px] bg-gradient-to-r from-black to-transparent rounded-bl-xl rounded-br-xl">
                    {item?.caption}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="my-12 text-4xl font-semibold">
            Top Study Abroad Colleges/Universities
          </h2>
          <AbroadUniveritySlider />
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
      <div className="bg-[#f4f4f4] py-8 mb-8">
        <div className="max-w-[1200px] m-auto mb-12">
          <h2 className="text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <FaqComponent faqCollection={faqCollection} />
        </div>
      </div>
      <div className="max-w-[1200px] m-auto">
        <div>
          <h2 className="text-4xl font-semibold">Study Abroad Webinars</h2>
          <AbroadWebinarSlider />
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-2">
            Explore Study Abroad Blogs
          </h2>
          <p className="mb-12">
            Read our blog collection to find the answers of your most asked
            questions
          </p>
          <BlogsSlider />
        </div>
      </div>
    </HeaderLayout>
  );
};
export default Courses;
const abroadArray = [
  {
    imageUrl: "/usa.jpg",
    caption: "Study in USA",
  },
  {
    imageUrl: "/germany.jpg",
    caption: "Study in Germany",
  },
];
const faqCollection = [
  {
    question: "How much do I pay to block my seat?",
    answer: "Consult our team.",
  },
  {
    question: "How can i select best university for me?",
    answer: "Consult our team.",
  },
  {
    question: "Is the information provided on this site accurate?",
    answer:
      "Yes, all the information we have provided on this site are accurate.",
  },
];
