import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="pt-[50px] pb-[0px] bg-[#e6f8ff] relative  ">
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px]   ">
          <div className=" md:flex sm:block  ">
            <div className="md:w-1/4 sm:max-w-full ">
              <div className="footer-widget">
                <div className="mb-[20px]">
                  {" "}
                  <Image
                    src={"/logo.webp"}
                    alt="close"
                    width={160}
                    height={50}
                  />
                </div>
                <p className="text-[15px] text-[#808292] font-medium  leading-[1.5em] pr-[15px]">
                  EduXLL is a higher education platform which delivers an
                  INNOVATIVE Methodology and latest and niche courses for
                  students and working professionals.
                </p>
                <ul className="flex gap-[10px] mt-[20px]">
                  {serarry?.map((item, index) => {
                    return (
                      <>
                        <li className="flex justify-center items-center w-[35px] h-[35px] bg-[#808292] hover:bg-[#08a9e6] hover:rounded-[5px]">
                          <a href={item.link}>
                            <Image
                              src={item.serarryicon}
                              width={18}
                              height={18}
                              alt=""
                            />
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  About Us
                </h3>
                <ul>
                  {Aboutlink?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href="#" className="pointer">
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Resourses
                </h3>
                <ul>
                  {Resourseslink?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href="#" className="pointer">
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Quick Link
                </h3>
                <ul>
                  {QuickLink?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href="#" className="pointer">
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/4 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Contact Us
                </h3>
                <ul>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <a href="#" className="pointer">
                      <span className="text-[#21225f]">Address:</span> 603, 6th
                      Floor, ILD Trade Centre, Sector 47, Sohna Road, Gurugram –
                      122018, Haryana
                    </a>
                  </li>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <a href="#" className="pointer">
                      <span className="text-[#21225f]">Email:</span>{" "}
                      info@eduxll.com
                    </a>
                  </li>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <a href="#" className="pointer">
                      <span className="text-[#21225f]">Phone:</span>
                      +91 8448 198 656 <br /> +91 9773 774 209
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:max-w-[1200px]  px-[15px] w-[100%] mx-auto mt-[30px] border-t-[1px] border-solid border-[#7070701a]">
          <p className="pt-[30px] pb-[30px]  text-center text-[13px] text-[#808292] font-medium  leading-[1.5em]">
            Copyright. All Rights Reserved{" "}
          </p>
        </div>

        {/* <div className="shape722 absolute bottom-[20%] right-[.5%] none sm:block ">
          <Image src="/shape7.png" width={200} height={117} alt="shape7" />
        </div> */}
      </div>
    </>
  );
};
export default Footer;

const serarry = [
  {
    serarryicon: "/soc/facebook-fill.svg",
    link: "#",
  },
  {
    serarryicon: "soc/instagram-fill.svg",
    link: "#",
  },
  {
    serarryicon: "soc/linkedin-fill.svg",
    link: "#",
  },
  {
    serarryicon: "soc/twitter-fill.svg",
    link: "#",
  },
];

const Aboutlink = [
  { link: "About Us" },
  { link: "Course" },
  { link: "Events" },
  { link: "Become an Instructor" },
];
const Resourseslink = [
  { link: "Home" },
  { link: "Free Course" },
  { link: "Privacy Policy" },
  { link: "Terms & Conditions" },
];
const QuickLink = [
  { link: "News" },
  { link: "Blogs" },
  { link: "Course" },
  { link: "webinars" },
];
