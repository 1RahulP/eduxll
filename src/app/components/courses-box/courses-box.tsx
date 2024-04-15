import Image from "next/image";

const CoursesBox = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:max-w-[1200px] w-[100%] mx-auto px-[15px]">
        {coursesArray?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#f5f5f5] hover:bg-[#e7e7e7] hover:shadow-xl transition-all w-full  h-[86px] cursor-pointer rounded-md gap-4 p-4 flex items-center m-auto"
            >
              <div>
                <Image src={item.imageUrl} alt="image" width={36} height={36} />
              </div>
              <h3 className="text-xl font-semibold text-[#21225F]">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CoursesBox;
const coursesArray = [
  {
    imageUrl: "/svg/code-box-line.svg",
    title: "Development",
  },
  {
    imageUrl: "/svg/megaphone-line.svg",
    title: "Marketing",
  },
  {
    imageUrl: "/svg/palette-line.svg",
    title: "Art & Design",
  },
  {
    imageUrl: "/svg/service-line.svg",
    title: "Health & Fitness",
  },
  {
    imageUrl: "/svg/briefcase-line.svg",
    title: "Business",
  },
  {
    imageUrl: "/svg/database-2-line.svg",
    title: "Data Science",
  },
  {
    imageUrl: "/svg/home-heart-line.svg",
    title: "Lifestyle",
  },
  {
    imageUrl: "/svg/image-circle-line.svg",
    title: "Photography",
  },
];
