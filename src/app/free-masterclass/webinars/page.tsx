import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import Image from "next/image";

const Webinars = () => {
  return (
    <HeaderLayout>
      <div className="grid grid-cols-[1.5fr_1fr] h-[400px]">
        <div className="bg-blue-900 text-white py-8 relative">
          <div className="max-w-[500px] m-auto">
            <div className="flex gap-2">
              <span className="cursor-pointer">Home</span>
              <span>{">"}</span>
              <span>Webinar</span>
            </div>
            <h2 className="text-2xl font-semibold mt-12 mb-6">
              AI&apos;s Impact on Healthcare Digitalization
            </h2>
            <div>
              <div className="flex">
                <span className="bg-red-800 py-2 px-4">Date:</span>
                <p className="border border-white py-2 px-4">
                  30 March 2024, Saturday
                </p>
              </div>
              <div className="flex">
                <span className="py-2 px-4 bg-orange-600">Time:</span>
                <p className="border border-white py-2 px-4">
                  2:30 PM to 3:30 PM
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-60px] top-[33%] w-fit">
            <Image
              src={"/user3.jpg"}
              alt="user"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>
        <div>hii</div>
      </div>
    </HeaderLayout>
  );
};
export default Webinars;
