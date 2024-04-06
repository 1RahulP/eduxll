import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center gap-8 p-12 bg-[#f5f5f5]">
        <div>
          <h2 className="text-5xl font-bold text-[#21225F] tracking-wider">
            Start learning from the world’s best institutions
          </h2>
          <p className="my-8 text-[#808292]">
            Flexible easy to access learning opportunities can bring a
            significant change in how individuals prefer to learn! The Edla can
            offer you to enjoy the beauty of eLearning!
          </p>
          <div className="flex">
            <input type="text" placeholder="What do you want to learn today?" className="w-[70%] outline-none p-4" />
            <Button searchIcon text={"Search Now"} className={"rounded-none bg-[#08A9E6] text-white border-none !p-5 w-[25%] text-center"} />
          </div>
          <div className="my-8 flex gap-6 items-center">
            <div className="flex">
                <Image src={"/png/user.png"} alt="user" width={52} height={52} className=" rounded-full p-[3px] bg-white border border-[#e5e5e5]" />
                <Image src={"/png/user.png"} alt="user" width={52} height={52} className="ml-[-8px] rounded-full p-[3px] bg-white border border-[#e5e5e5]" />
                <Image src={"/png/user.png"} alt="user" width={52} height={52} className="ml-[-8px] rounded-full p-[3px] bg-white border border-[#e5e5e5]"  />
            </div>
            <div>
                <div className="text-[#808292]">
                    <p>Need help? <Link href={"#"} className="underline"> Contact our Edla support</Link></p>
                    <p>Tell us about your query</p>
                </div>
                <div></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 items-center relative">
            <div>
                <Image src="/banner01.jpg" alt="banner" width={400} height={650} className="rounded-bl-[25%] z-[2] relative"/>
            </div>
            <div className="grid gap-6">
            <Image src="/banner02.jpg" alt="banner" width={400} height={650} className="rounded-tl-[25%] z-[2] relative" />
            <Image src="/banner03.jpg" alt="banner" width={400} height={650} className="rounded-tr-[25%] z-[2] relative" />

            </div>
            <Image src="/dotts.png" alt="banner" width={400} height={650} className="absolute top-6 left-0" />
            <Image src="/dotts.png" alt="banner" width={400} height={650} className="absolute bottom-6 left-0" />
            <Image src="/net.png" alt="banner" width={300} height={300} className="absolute bottom-[-30px] right-[-30px]" />

        </div>
      </div>
    </>
  );
};
export default Banner;
