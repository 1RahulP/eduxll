"use client";
import Button from "@/app/components/button/Button";
import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import Image from "next/image";
import Link from "next/link";
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
      <HeaderLayout>
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

          <section className="bg-[#d32f2f] py-[20px] sticky top-[66px]">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <ul className="flex gap-[10px]">
                {tabsarry?.map((nav, index) => {
                  return (
                    <>
                      <li>
                        <Link
                          href="#"
                          className="text-[#fff] text-[16px] leading-[1.5em] cursor-pointer"
                        >
                          {nav.link}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </section>

          <div className="md:mx-20  pt-[30px]  px-4">
            <div className="grid sm:grid-cols-[2fr_1fr] gap-[30px]">
              <div className="lg:pl-16">
                <h3 className="text-[20px] font-[600] mb-[10px]">Overview</h3>
                <p className="text-[16px] leading-[1.5em] text-[#383838] mb-[16px]">
                  The Step into Robotic Process Automation (RPA) course intends
                  to introduce RPA to students. The course assumes no prior
                  knowledge of RPA and takes a use-case based approach. It
                  begins by defining a real-world, generic problem and how
                  it&apos;s solved in a non-RPA environment.
                </p>
                <p className="text-[16px] leading-[1.5em] text-[#383838]">
                  The course teaches skills that enable the students to create a
                  robot using free UiPath software (Academic Alliance Edition)
                  to automate the solution.
                </p>
              </div>
              <div>
                <div className="forms ">
                  <div className="max-w-[400px] rounded-[10px] border-[1px] border-slate-200 bg-slate-100  p-[20px]">
                    <h3 className="text-[20px] font-[600] mb-[10px]">
                      Get In Touch
                    </h3>
                    <div className="formbox flex flex-col gap-[10px]">
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm "
                          placeholder="Name :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                          placeholder="Mobile No :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="email"
                          className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                          placeholder="Email id :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                          placeholder="Course :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <textarea
                          className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                          placeholder="Massage :"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:px-16">
              <h3 className="text-[20px] font-[600] mb-[10px]">
                Top Skills you will learn
              </h3>
              <div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Understand the basics of Robotic Process Automation
                  </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Identify processes that can be automated
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Develop and deploy basic robots independently using UiPath
                    RPA Platform (Academic Alliance Edition)
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:mt-16 mt-8 lg:px-16">
              <h3 className="text-[20px] font-[600] mb-[10px]">Highlights</h3>
              <div className="grid sm:grid-cols-2">
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Self Paced – 100% Online Learning
                  </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    GUVI Forum Support
                  </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Lifetime Access
                  </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={"/check-line.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] leading-[1.5em] text-[#383838]">
                    Codekata – Gamified coding Arena
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:mt-16 mt-8 lg:px-16">
              <h3 className="text-[20px] font-[600] mb-[10px]">
                Who should Enroll
              </h3>
              <div className="flex gap-2 mb-2">
                <div className="flex-none mt-[4px]">
                  <Image
                    src={"/check-double-line.svg"}
                    alt="bullet"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-[16px] leading-[1.5em] text-[#383838]">
                  To understand and complete the course successfully the student
                  must have basic knowledge of computers.
                </p>
              </div>
              <div className="flex gap-2 flex-start">
                <div className="flex-none mt-[4px]">
                  <Image
                    src={"/check-double-line.svg"}
                    alt="bullet"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-[16px] leading-[1.5em] text-[#383838]">
                  This course is intended for industry professionals and
                  University Engineering students who want to acquire the skills
                  of designing and developing robots for process automation.
                </p>
              </div>
            </div>
            <div className="sm:mt-16 mt-8 lg:px-16">
              <h3 className="text-[20px] font-[600] mb-[10px]">
                Course Syllabus
              </h3>
              <div className="flex flex-col gap-[10px]">
                {courseCollection?.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="  border border-dashed rounded-md overflow-hidden"
                    >
                      <div
                        className={`grid sm:grid-cols-3 grid-cols-[3fr_2fr_1fr] cursor-pointer   p-4 bg-[#f3f4f678] cursor-pointer ${
                          toggleSylabbus === value.title ? "" : ""
                        }`}
                        onClick={() => syllabus(value.title)}
                      >
                        <h4 className="text-[15px] font-[500] text-[#000]">
                          {value.title}
                        </h4>
                        <span className="text-[15px] font-[500] text-[#000]">
                          {value.lesson}
                        </span>
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
                                className="flex gap-2 toggleSyllabus p-4"
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
                                    <span className="w-[2px] h-[100%] block bg-blue-400 ml-[10px]"></span>
                                  )}
                                </div>
                                <p className=" sm:text-sm text-xs text-[#767676] font-[400]">
                                  {item.list}
                                </p>
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
              <p className="text-[16px] leading-[1.5em] text-[#383838]">
                To understand and complete the course successfully the student
                must have basic knowledge of computers.
              </p>
            </div>
          </div>

          <section className=" py-[30px] border border-b-slate-50 border-t-slate-50 mt-[30px]">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <div className="grid sm:grid-cols-2 gap-4 items-center">
                <div className="certificatebigimage p-[20px] bg-[#e7e7e74f]">
                  <div>
                    <Image
                      src="/university-image.jpg"
                      width={600}
                      height={500}
                      alt="certificate"
                      objectFit="cover"
                    />
                  </div>
                  <div className="textbox flex flex-col gap-[10px] p-[10px]">
                    <h4 className="text-[20px] font-[600] leading-[1.5em]">
                      PGP - Data Science & Engineering from Great Lakes
                    </h4>
                    <p className="text-[16px] leading-[1.5em] text-[#383838]">
                      Data Science Bootcamp designed by India best Faculty to
                      deliver career outcome
                    </p>
                  </div>
                </div>
                <div className="contentbox">
                  <div className="grid sm:grid-cols-2 gap-4 items-start ">
                    <div className="certificate-detail-wrapper">
                      <div>
                        <Image
                          src="/dseft-sample-certificate.jpg"
                          width={400}
                          height={400}
                          alt="certificate"
                        />
                      </div>
                      <div className="text-center mt-[20px]">
                        <h4 className="text-[15px] font-[600] mb-[5px] text-[#343434]">
                          Great Lakes Executive Learning
                        </h4>
                        <Link
                          href="#"
                          className="text-[red] text-[15px] font-[500] underline underline-offset-8 cursor-pointer"
                        >
                          View Sample Certificate
                        </Link>
                      </div>
                    </div>
                    <div className="rank-detail-wrapper flex flex-col gap-[10px]">
                      {rankdetailarry?.map((item, index) => {
                        return (
                          <>
                            <div className="flex gap-[10px] ">
                              <div className="rankimage w-[50px] h-[50px]">
                                <Image
                                  src={item.rankimage}
                                  width={50}
                                  height={50}
                                  alt={item.rankheading}
                                />
                              </div>
                              <div className="rankcontentbox flex-1">
                                <h4 className="text-[15px] font-[600] mb-[10px] text-[#343434]">
                                  {item.rankheading}
                                </h4>
                                <p className="text-[10px] font-[500] text-[#48485e]">
                                  {item.ranksubheading}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="sm:mt-16 mt-8 bg-blue-800 text-white sm:p-16 p-8">
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
                    src={"/check-line.svg"}
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
                    src={"/check-line.svg"}
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
                    src={"/check-line.svg"}
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
          </div> */}
          <div className="sm:my-16 my-8 items-center grid sm:grid-cols-[2fr_1fr] sm:px-16 px-4 md:mx-16">
            <div>
              <h3 className="mb-4 sm:text-2xl text-lg mb-4 tracking-wide sm:text-left text-center">
                Why GUVI?
              </h3>
              <p className="text-[16px] leading-[1.5em] text-[#383838]">
                Guvi is an IIT-M , IIM-A incubated company located at IITM
                Research Park, Chennai. We help students master any programming
                skills so that they can learn and effectively practice the
                acquired knowledge and skills necessary to thrive in their
                career. Our feature includes practicing exercises, instructional
                videos, and a personalized learning dashboard that empowers
                learners to study at their own pace.
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

          <section className="bg-slate-200 p-[30px]">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <div className="border-b border-slate-200  ">
                <h4 className="text-[15px] font-[600] mb-[10px] text-[#343434]">
                  Fee & scholarships
                </h4>
                <p className="text-[14px] leading-[1.5em] text-[#383838]">
                  Our flexi-payment options allow students to pay fees in
                  hassle-free installments.
                </p>
              </div>

              <div className=" flex gap-[15px] mt-[15px] ">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1 text-center flex flex-col justify-center">
                  <h3 className="text-[13px] font-[600] mb-[10px] text-[#fff]">
                    FULL COURSE FEE(FOUR SEMESTERS)
                  </h3>
                  <p className="text-[15px] font-[500]   text-[#fff]">
                    <span>INR 2,80,000 </span> - 1,50,000
                  </p>
                  <p className="text-[10px] font-[500]   text-[#fff]">
                    incluslve Of all taxes
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-[15px]">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1">
                    <div className="flex items-center justify-center gap-[10px]">
                      <h3 className="text-[13px] font-[600]  text-[#fff]">
                        EACH SEMESTERS
                      </h3>
                      <div>
                        <p className="text-[15px] font-[500]   text-[#fff]">
                          <span>INR 2,80,000 </span> - 1,50,000
                        </p>
                        <p className="text-[10px] font-[500]   text-[#fff]">
                          incluslve Of all taxes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1">
                    <div className="flex items-center justify-center gap-[10px]">
                      <div className="w-[40px] h-[40px]">
                        <Image
                          src="/graduation-cap-line.svg"
                          width={40}
                          height={40}
                          alt="graduation"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] font-[500]   text-[#fff]">
                          What is Lorem Ipsum?
                        </p>
                        <p className="text-[10px] font-[500]   text-[#fff]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="sm:my-16 my-8 md:mx-16 sm:px-16 px-4">
            <h3 className="mb-4 sm:text-2xl text-lg mb-8 text-center font-semibold tracking-wide">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-4">
              {faqCollection?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" border border-dashed rounded-md overflow-hidden"
                  >
                    <div
                      className="flex justify-between cursor-pointer p-4 bg-[#f3f4f678] cursor-pointer"
                      onClick={() => faqToggle(item.ques)}
                    >
                      <h4 className="text-[15px] font-[500] text-[#000]">
                        {item.ques}
                      </h4>
                      <Image
                        src={"/svg/arrow-down.svg"}
                        alt="arrow-down"
                        width={12}
                        height={12}
                      />
                    </div>
                    {showFaq === item.ques && (
                      <p className="p-4   sm:text-sm text-xs text-[#767676] font-[400]">
                        {item.ans}
                      </p>
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
            <p className="mt-2 sm:text-left text-center">
              Talk to our experts. We’re available 24/7.
            </p>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 items-center my-8">
              <div className="flex gap-2 sm:text-xl text-md items-center">
                <div>
                  <Image
                    src="/india.png"
                    alt="country"
                    width={32}
                    height={32}
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
      </HeaderLayout>
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

const tabsarry = [
  { link: "Overview" },
  { link: "Highlights" },
  { link: "Who should Enroll" },
  { link: "Course Syllabus" },
  { link: "Pre-requisites" },
  { link: "Certificate" },
];

const rankdetailarry = [
  {
    rankimage: "/no-4.png",
    rankheading: "Top Standalone Institution ",
    ranksubheading: "*Outlook India",
  },
  {
    rankimage: "/no-4.png",
    rankheading: "Private B-Schools",
    ranksubheading: "*Careers360",
  },
  {
    rankimage: "/no-5.png",
    rankheading: "Non-IIM/IIT Institute",
    ranksubheading: "*NIRF",
  },
];
