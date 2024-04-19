import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import MasterSlider from "../components/free-masterSlider/master-slider";
import Button from "../components/button/Button";
import WebinarSlider from "../components/upcoming-webinar/webinar-slider";
import { connect } from "../dbConfig";
import FreeMaster from "../models/freeMaster";

const getAllClassess = async () => {
  try {
    connect();
    const freeMaterClassess = await FreeMaster.find();
    return freeMaterClassess;
  } catch (error) {
    return error;
  }
};

const FreeMasterClass = async () => {
  const response: any = await getAllClassess();

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
      <div className="my-16 pr-12 pl-32">
        <h3 className="text-4xl font-semibold pl-20">Free Masterclasses</h3>
        <MasterSlider response={response} />
        <div>
          <Button
            text={"VIEW OUR MASTERCLASSES"}
            className={
              "bg-red-500 text-white rounded-md px-12 py-4 !rounded-md font-semibold tracking-wide shadow-xl m-auto"
            }
          />
        </div>
        <div className="my-16">
          <h3 className="text-3xl font-semibold text-center">
            Register for Upcoming Webinars
          </h3>
          <WebinarSlider response={response} />
        </div>
      </div>
    </HeaderLayout>
  );
};
export default FreeMasterClass;
