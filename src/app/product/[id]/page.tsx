"use client";
import Button from "@/app/components/button/Button";
import Image from "next/image";
import { useState } from "react";
const ProductPage = () => {
  const [toggleSylabbus, setToggleSyllabus] = useState("");
  const [showFaq, setShowFaq] = useState("");
  const [showVideo, setVideo] = useState(false);
  const syllabus = (value: any) => {
    toggleSylabbus === "" ? setToggleSyllabus(value) : setToggleSyllabus("");
  };
  const faqToggle = (faq: any) => {
    showFaq === "" ? setShowFaq(faq) : setShowFaq("");
  };
  return (
    <>
      <div>
        <div className="bg-[url('/product-banner.jpg')] relative pt-10 pb-20 sm:px-24 px-2">
          <div className="max-w-[670px] bg-white relative rounded-md p-6">
            <div className="sm:flex justify-between">
              <div>
                <Image src="/texas.png" alt="logo" width={185} height={40} />
              </div>
              <div className="flex gap-4 sm:mt-0 mt-2">
                <div className="flex gap-2">
                  <Image
                    src={"/png/5plus.png"}
                    alt="plus"
                    width={34}
                    height={48}
                    className="w-[34px] h-[35px]"
                  />
                  <span className="text-[10px] font-semibold text-[#999999]">
                    YEARS OF <br />
                    EXCELLENCE{" "}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/png/14plus.png"}
                    alt="plus"
                    width={54}
                    height={35}
                    className="w-[54px] h-[38px]"
                  />
                  <span className="text-[10px] font-semibold text-[#999999]">
                    SUCCESSFULL <br />
                    BATCHES{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:mt-4 mt-2 bg-[#e8f0fc] w-fit px-2 py-[5px] text-[#00000099] text-sm">
              <p>PGP - Artificial Intelligence & Machine Learning</p>
            </div>
            <h3 className="sm:text-3xl text-xl font-semibold tracking-wide sm:mt-4 mt-2">
              Build a successful career in Artificial Intelligence and Machine
              Learning
            </h3>
            <div className="sm:flex items-center gap-4 text-[#999999] text-sm my-6">
              <div className="sm:mb-0 mb-2">
                <Image
                  src={"/svg/four-and-half-starssvg.svg"}
                  alt="stars"
                  width={80}
                  height={16}
                />
              </div>
              <span>8,367 Ratings</span>
              <ul className="sm:flex gap-2 list-disc">
                <li className="ml-4">Online Mentorship</li>
                <li className="ml-4">12 Months</li>
                <li className="ml-4">Career Support</li>
              </ul>
            </div>
            <div className="flex gap-6">
              <Button
                text={"Download Brochure"}
                className={
                  "hover:shadow-md sm:w-[226px] flex justify-center bg-blue-500 text-white border-none sm:py-4 py-2 sm:text-md text-sm !rounded-md"
                }
              />
              <Button
                text={"Apply Now"}
                className={
                  "hover:shadow-md sm:w-[226px] flex justify-center !rounded-md !border-black sm:py-4 py-2 sm:text-md text-sm"
                }
              />
            </div>
            {/* play button for tabs and mobiles */}
            <div
              className="absolute sm:top-[40%] top-[55%] md:hidden block top-[40%] border right-[5%] bg-white p-4 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setVideo(true)}
            >
              <Image
                src="/svg/play.svg"
                alt="play"
                width={44}
                height={44}
                className="relative left-[2px]"
              />
            </div>
          </div>
          <div
            className="absolute top-[40%] w-fit md:block hidden lg:left-[70%] lg:right-0 right-[5%] bg-white p-4 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setVideo(true)}
          >
            <Image
              src="/svg/play.svg"
              alt="play"
              width={44}
              height={44}
              className="relative left-[2px]"
            />
          </div>
          {showVideo && (
            <div className="backdrop-blur-md h-screen absolute top-0 w-screen left-0 m-auto">
              <iframe
                className="relative top-[20%] m-auto"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Dmu2AL8em8M?si=jTKgBgXt1_I4Pzyi"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div
                className="bg-white w-[20px] h-[20px] flex rounded-full text-center justify-center items-center text-xl rotate-45 absolute right-[28%] top-[15%] cursor-pointer"
                onClick={() => setVideo(false)}
              >
                +
              </div>
            </div>
          )}
        </div>
        <div className="md:mx-20 sm:pt-6 pt-4 sm:px-16 px-4">
          <div className="grid sm:grid-cols-[2fr_1fr] items-center">
            <div className="lg:pl-16">
              <h3 className="sm:text-2xl text-lg my-4 sm:text-left text-center">Overview</h3>
              <p className="sm:text-lg text-sm">
                The Step into Robotic Process Automation (RPA) course intends to
                introduce RPA to students. The course assumes no prior knowledge
                of RPA and takes a use-case based approach. It begins by
                defining a real-world, generic problem and how it&apos;s solved
                in a non-RPA environment.
              </p>
              <p className="sm:text-lg text-sm sm:mt-0 mt-2">
                The course teaches skills that enable the students to create a
                robot using free UiPath software (Academic Alliance Edition) to
                automate the solution.
              </p>
            </div>
            <div>
              <Image
                src={"/overview.png"}
                alt="overview"
                width={316}
                height={342}
                className="m-auto"
              />
            </div>
          </div>
          <div className="mt-8 lg:px-16">
            <h3 className="sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Top Skills you will learn
            </h3>
            <div>
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">Understand the basics of Robotic Process Automation</p>
              </div>
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">Identify processes that can be automated</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">
                  Develop and deploy basic robots independently using UiPath RPA
                  Platform (Academic Alliance Edition)
                </p>
              </div>
            </div>
          </div>
          <div className="sm:mt-16 mt-8 lg:px-16">
            <h3 className="sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Highlights
            </h3>
            <div className="grid sm:grid-cols-2">
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">Self Paced – 100% Online Learning</p>
              </div>
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">GUVI Forum Support</p>
              </div>
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">Lifetime Access</p>
              </div>
              <div className="flex gap-2 mb-2">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="sm:text-lg text-sm">Codekata – Gamified coding Arena</p>
              </div>
            </div>
          </div>
          <div className="sm:mt-16 mt-8 lg:px-16">
            <h3 className="sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Who should Enroll
            </h3>
            <div className="flex gap-2 mb-2">
              <div className="flex-none mt-[4px]">
                <Image
                  src={"/svg/bullet.svg"}
                  alt="bullet"
                  width={16}
                  height={16}
                />
              </div>
              <p className="sm:text-lg text-sm">
                To understand and complete the course successfully the student
                must have basic knowledge of computers.
              </p>
            </div>
            <div className="flex gap-2 flex-start">
              <div className="flex-none mt-[4px]">
                <Image
                  src={"/svg/bullet.svg"}
                  alt="bullet"
                  width={16}
                  height={16}
                />
              </div>
              <p className="sm:text-lg text-sm">
                This course is intended for industry professionals and
                University Engineering students who want to acquire the skills
                of designing and developing robots for process automation.
              </p>
            </div>
          </div>
          <div className="sm:mt-16 mt-8 lg:px-16">
            <h3 className="mb-4 sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Course Syllabus
            </h3>
            <div>
              {courseCollection?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-xl sm:p-6 p-2 border rounded-md bg-white items-center mb-4"
                  >
                    <div
                      className={`grid sm:grid-cols-3 grid-cols-[3fr_2fr_1fr] cursor-pointer ${
                        toggleSylabbus === "" ? "" : "mb-4"
                      }`}
                      onClick={() => syllabus(value.title)}
                    >
                      <h4 className="sm:text-lg text-sm">{value.title}</h4>
                      <span className="sm:text-lg text-sm">{value.lesson}</span>
                      <div className="flex justify-end">
                        <Image
                          src={"/svg/arrow-down.svg"}
                          alt="aoow-down"
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>
                    {toggleSylabbus === value.title && (
                      <>
                        {value?.module?.map((item, ind) => {
                          return (
                            <div
                              key={ind}
                              className="flex gap-2 toggleSyllabus"
                            >
                              <div className="relative ">
                                <Image
                                  src={"/tick-blue.png"}
                                  alt="check"
                                  width={24}
                                  height={24}
                                />
                                {item.list === "Types of Robots" ? (
                                  ""
                                ) : item.list === "Hello World Robot" ? (
                                  ""
                                ) : item.list === "Coding the Robot" ? (
                                  ""
                                ) : item.list === "What Next" ? (
                                  ""
                                ) : (
                                  <span className="w-[2px] h-8 block bg-blue-400 ml-[10px]"></span>
                                )}
                              </div>
                              <p className="sm:text-lg text-sm">{item.list}</p>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:mt-16 mt-8 lg:px-16">
            <h3 className="mb-4 sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Pre-requisites
            </h3>
            <p className="sm:text-lg text-sm">
              To understand and complete the course successfully the student
              must have basic knowledge of computers.
            </p>
          </div>
        </div>
        <div className="sm:mt-16 mt-8 bg-blue-800 text-white sm:p-16 p-8">
          <div className="grid sm:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src={"/certificate.webp"}
                alt="certificate"
                width={313}
                height={276}
                className="m-auto rounded-xl md:w-[50%] w-[80%]"
              />
            </div>
            <div className="grid gap-2">
              <h3 className="mb-2 font-semibold text-2xl tracking-wide md:text-left text-center">
                Certificate
              </h3>
              <div className="flex gap-2 items-start">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="md:text-md text-sm">
                  UiPath Certificate is available on a pay-per basis.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="md:text-md text-sm">
                  Certificates are issued by UiPath in association with GUVI.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image
                  src={"/svg/check.svg"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="md:text-md text-sm">
                  Certificates are globally recognized & they upgrade your
                  programming profile.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:my-16 my-8 items-center grid sm:grid-cols-[2fr_1fr] sm:px-16 px-4 md:mx-16">
          <div>
            <h3 className="mb-4 sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
              Why GUVI?
            </h3>
            <p className="sm:text-lg text-sm">
              Guvi is an IIT-M , IIM-A incubated company located at IITM
              Research Park, Chennai. We help students master any programming
              skills so that they can learn and effectively practice the
              acquired knowledge and skills necessary to thrive in their career.
              Our feature includes practicing exercises, instructional videos,
              and a personalized learning dashboard that empowers learners to
              study at their own pace.
            </p>
          </div>
          <div className="sm:mt-0 mt-4">
            <Image
              src={"/why.png"}
              alt="why"
              width={160}
              height={250}
              className="m-auto md:w-[50%]"
            />
          </div>
        </div>
        <div className="sm:my-16 my-8 md:mx-16 sm:px-16 px-4">
          <h3 className="mb-4 sm:text-2xl text-lg mb-8 text-center font-semibold tracking-wide">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-4">
            {faqCollection?.map((item, index) => {
              return (
                <div key={index} className="p-4 shadow-xl border rounded-md">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => faqToggle(item.ques)}
                  >
                    <h4 className="sm:text-lg text-sm font-semibold">{item.ques}</h4>
                    <Image
                      src={"/svg/arrow-down.svg"}
                      alt="arrow-down"
                      width={12}
                      height={12}
                    />
                  </div>
                  {showFaq === item.ques && (
                    <p className="sm:mt-6 mt-2 sm:pl-4 pl-2 sm:text-sm text-xs">{item.ans}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:px-16 px-4 md:mx-16">
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold">
            upGrad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-purple-700 to-pink-600">
              {" "}
              Learner Support
            </span>
          </h3>
          <p className="mt-2 sm:text-left text-center">Talk to our experts. We’re available 24/7.</p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 items-center my-8">
            <div className="flex gap-2 sm:text-xl text-md items-center">
              <div>
                <Image src="/india.png" alt="country" width={32} height={32} 
                  className="sm:w-[100%] w-[75%]"
                
                />
              </div>
              <span className="sm:text-xl text-sm">Indian Nationals</span>
            </div>
            <div className="border border-red-500 rounded-full w-fit md:p-4 p-2 font-semibold flex gap-2 items-center">
              <div>
                <Image
                  src={"/svg/phone.svg"}
                  alt="phone"
                  width={24}
                  height={24}
                  className="sm:w-[100%] w-[75%]"

                />
              </div>
              <span className="sm:text-lg text-xs">1800 210 2020</span>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Image
                  src="/svg/earth.svg"
                  alt="earth"
                  width={32}
                  height={32}
                  className="sm:w-[100%] w-[75%]"
                />
              </div>
              <span className="sm:text-xl text-sm">Foreign Nationals</span>
            </div>
            <div className="w-fit flex gap-2 items-center md:p-4 p-2 border border-red-500 rounded-full font-semibold">
              <div>
                <Image
                  src={"/svg/phone.svg"}
                  alt="phone"
                  width={24}
                  height={24}
                  className="sm:w-[100%] w-[75%]"
                
                />
              </div>
              <span className="sm:text-lg text-xs">+918045604032</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
const courseCollection = [
  {
    title: "Beginner Module",
    lesson: "4 Lessons",
    module: [
      {
        list: "Basics of RPA",
      },
      {
        list: "RPA Benefits",
      },
      {
        list: "Processes that can be automated",
      },
      {
        list: "Types of Robots",
      },
    ],
  },
  {
    title: "Intermediate Module",
    lesson: "3 Lessons",
    module: [
      {
        list: "Installing UiPath Studio (Academic Alliance Edition)",
      },
      {
        list: "Installing browser extensions",
      },
      {
        list: "Hello World Robot",
      },
    ],
  },
  {
    title: "Advanced Module",
    lesson: "5 Lessons",
    module: [
      {
        list: "Screen Scraping",
      },
      {
        list: "Recording",
      },
      {
        list: "Sequences and flowcharts",
      },
      {
        list: "Loops",
      },
      {
        list: "Coding the Robot",
      },
    ],
  },
  {
    title: "Expert Module",
    lesson: "5 Lessons",
    module: [
      {
        list: "Data persistence",
      },
      {
        list: "Working with Excel",
      },
      {
        list: "Selectors",
      },

      {
        list: "What Next",
      },
    ],
  },
];
const faqCollection = [
  {
    ques: "Will I gain access to any sort of Forum support?",
    ans: "Yes. You will gain complete access to our forum support to connect with our fellow aspiring users.",
  },
  {
    ques: "Apart from these courses, will I get access to any practice platforms?",
    ans: "You will gain access to CodeKata which is a gamified practice platform which hosts 1000+ curated coding problems and IDE, which is an Integrated Development Environment that lets you write, edit, run, test & debug your code.",
  },
  {
    ques: "On what basis are the certificates rolled out?",
    ans: "UiPath certification is available for a nominal fee. If paid, you will receive an E-certificate through email as soon as you complete the course with 100% progress.",
  },
  {
    ques: "Is it 100% online learning or should I come in person for any specific course?",
    ans: "It is a 100% online learning course package and there won’t be any necessity for you to be present in person.",
  },
];
