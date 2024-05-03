import Button from "@/app/components/button/Button";
import CourseSyllabusPage from "@/app/components/course-syllabus/page";
import FaqNew from "@/app/components/faq-section/page";
import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import { connect } from "@/app/dbConfig";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Courses from "@/app/models/coursesModels";

const getSingleCourse = async (slug: string) => {
  try {
    connect();
    const cour = await Courses.findOne({ slug });
    return cour;
  } catch (error) {
    return error;
  }
};

const ProductPage = async ({ params }: any) => {
  const paramA = params.id;
  const response = await getSingleCourse(paramA);
  console.log({ response }, "check kro bhai");
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
                <p>{response?.courseBranch[0]?.label}</p>
              </div>
              <h3 className="sm:text-3xl text-xl font-semibold tracking-wide sm:mt-4 mt-2">
                {response?.title}
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
                  <li className="ml-4">{response?.duration}</li>
                  <li className="ml-4">Career Support</li>
                </ul>
              </div>
              <div className="flex gap-6">
                <a href={response?.brochure} download target="_blank">
                  <Button
                    text={"Download Brochure"}
                    className={
                      "hover:shadow-md sm:w-[226px] flex justify-center bg-blue-500 text-white border-none sm:py-4 py-2 sm:text-md text-sm !rounded-md"
                    }
                  />
                </a>
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
                // onClick={() => setVideo(true)}
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
              // onClick={() => setVideo(true)}
            >
              <Image
                src="/svg/play.svg"
                alt="play"
                width={44}
                height={44}
                className="relative left-[2px]"
              />
            </div>

            {/* <div className="backdrop-blur-md h-screen absolute top-0 w-screen left-0 m-auto">
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
                  // onClick={() => setVideo(false)}
                >
                  +
                </div>
              </div> */}
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: response?.description.replace(/"/g, ""),
                  }}
                ></div>
                {/* <div className="sm:mt-0 mt-4">
                  <Image
                    src={"/why.png"}
                    alt="why"
                    width={160}
                    height={250}
                    className="m-auto md:w-[50%]"
                  />
                </div> */}
              </div>
              <div>
                <div className="forms ">
                  <div className="max-w-[400px] rounded-[10px] border-[1px] border-slate-200 bg-slate-100  p-[20px]">
                    <h3 className="text-[20px] font-[600] mb-[10px]">
                      Get Free Consultation
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
          </div>

          <section className=" py-[30px] border border-b-slate-50 bg-slate-50 border-t-slate-50 mt-[30px]">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <div className="grid sm:grid-cols-2 gap-4 items-center">
                <div className="certificatebigimage p-[20px] bg-[#e7e7e74f]">
                  <div>
                    <Image
                      src={response?.universityImage}
                      width={600}
                      height={500}
                      alt="certificate"
                      objectFit="cover"
                    />
                  </div>
                  <div className="textbox flex flex-col gap-[10px] p-[10px]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: response?.universityDescription.replace(
                          /"/g,
                          ""
                        ),
                      }}
                    ></div>
                  </div>
                </div>
                <div className="contentbox">
                  <div className="grid sm:grid-cols-2 gap-4 items-start ">
                    <div className="certificate-detail-wrapper">
                      <div>
                        <Image
                          src={response?.certificate}
                          width={400}
                          height={400}
                          alt="certificate"
                        />
                      </div>
                      <div className="text-center mt-[20px]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: response?.certificateDescription.replace(
                              /"/g,
                              ""
                            ),
                          }}
                        ></div>

                        <Link
                          href="#"
                          className="text-[red] text-[15px] font-[500] underline underline-offset-8 cursor-pointer"
                        >
                          View Sample Certificate
                        </Link>
                      </div>
                    </div>
                    <div className="rank-detail-wrapper flex flex-col gap-[10px]">
                      <div className="flex gap-[10px] ">
                        <div className="rankimage w-[50px] h-[50px]">
                          <Image
                            src={response?.logoOne}
                            width={50}
                            height={50}
                            alt={"logo"}
                          />
                        </div>
                        <div className="rankcontentbox flex-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: response?.logoOnedescription.replace(
                                /"/g,
                                ""
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-[10px] ">
                        <div className="rankimage w-[50px] h-[50px]">
                          <Image
                            src={response?.logoTwo}
                            width={50}
                            height={50}
                            alt={"logo"}
                          />
                        </div>
                        <div className="rankcontentbox flex-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: response?.logoTwodescription.replace(
                                /"/g,
                                ""
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CourseSyllabusPage />

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
                    <span>INR {response?.coursePrice} </span>
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
                          <span>INR {response?.semesterPrice} </span>
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
                          {response?.priceContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FaqNew />

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
