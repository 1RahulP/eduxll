import Image from "next/image";
import Badgechip from "../badge";

const BestCourses = () => {
  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px]">
        <div className="w-[1200px] mx-auto ">
          <h2 className="text-[35px] text-black leading-[1.3] font-bold mb-[20px]">
            Discover <br />
            World&apos;s Best Courses
          </h2>

          <div className="flex gap-[45px] mb-[20px]">
            {Coursesfilter.map((item, index) => {
              return (
                <>
                  <div className="">{item.tabname}</div>
                </>
              );
            })}
          </div>

          <div className="grid grid-cols-3">
            <div className="cardview">
              <div className="image">
                <Image src="/" alt={""} width={"410"} height={260} />
              </div>
              <div className="eduman-course-wraper contentbox p-[30px]">
                <div className="eduman-course-heading">
                  <Badgechip bgcolor="#31bf82" textcolor="#ebfcf7">
                    fsdfd
                  </Badgechip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BestCourses;

const Coursesfilter = [
  { tabname: "View All" },
  { tabname: "Data Science" },
  { tabname: "Development" },
  { tabname: "Business" },
  { tabname: "Life Styles" },
];
