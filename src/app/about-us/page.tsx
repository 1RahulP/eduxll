import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";

const AboutUs = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/about-us/banner.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block">About Us</h2>
            <p className="sm:text-md text-sm font-normal mt-2">
              <Link href={"#"}>Home</Link> /{" "}
              <Link href={"#"} className="text-[#97f1b9]">
                About Us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold mb-2">About Eduxll</h3>
          <p className="text-sm">
            <span className="font-semibold"> EduXLL</span> is a higher education
            platform which delivers an INNOVATIVE Methodology and latest and
            niche courses for students and working professionals.
          </p>
          <ul className="list-disc grid gap-2 pl-8 mt-8 text-sm">
            <li>
              <p>
                <span className="font-semibold"> EduXLL</span> prepares
                professionals for accelerating their career – enabling them to
                hands-on knowledge of the latest areas in technology and
                management domain.
              </p>
            </li>
            <li>
              <p>
                Flexible approach to learning in terms of finishing
                <span className="font-semibold"> learning</span>
                milestones and with respect to duration
              </p>
            </li>
            <li>
              <p>
                Latest<span className="font-semibold"> curriculum</span> and
                experienced professors from EduXLL and top
                universities/B-Schools
              </p>
            </li>
            <li>
              Live corporate projects blended with theory in the course delivery
            </li>
          </ul>
          <button className="bg-green-700 flex md:mx-0 m-auto gap-2 py-3 text-white px-6 rounded-md mt-6">
            <div className="bg-white w-fit p-[3px] rounded-full">
              <Image src={"/svg/check.svg"} alt="view" width={16} height={16} />
            </div>
            <span>Enrolled Today</span>
          </button>
          {/* <Button text={"Enrolled Today"} /> */}
        </div>
        <div>
          <Image
            src="/about-us/girl.webp"
            alt="girl"
            width={506}
            height={430}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center max-w-[1200px] sm:m-auto my-6 md:py-20 pt-0 pb-12 lg:px-0 px-4">
        <div className="p-8 bg-[#FFFDF8] text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-sm h-[100px]">
            To create a learner-friendly knowledge platform that ensures and
            facilitate world-class quality of learning & teaching by providing a
            curriculum that is personalized, learner-focused, flexible and
            inspiring, thus motivating learners to excel in academics and
            professional environments.
          </p>
        </div>
        <div className="p-8 bg-[#FFFAFA] text-center">
          <h3 className="text-2xl font-semibold mb-4"> Our Mission</h3>
          <p className="text-sm h-[100px]">
            Prosper the spirit of continuous and comprehensive academic
            excellence among all learners; and create courses with customized
            learning opportunities for all participants that enable them to
            achieve their professional goals.
          </p>
        </div>
      </div>
      <div className="bg-[#03B97C] px-6 py-12 text-white font-semibold sm:text-[22px] text-[16px]">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-0 gap-4 text-center max-w-[1200px] m-auto">
          <div>
            <h2>
              {" "}
              EduXLL Learner Support- (INDIA / Foreign Nations) Talk to our
              experts
            </h2>
            <h2>We’re available 24/7.</h2>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/svg/whatsapp.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/slash.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"

              />
            </div>
            <div>
              <Image
                src={"/svg/phone-white.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"

              />
            </div>
            <p className="ml-4 sm:text-2xl text-lg">+91 8448 198 656</p>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
export default AboutUs;
