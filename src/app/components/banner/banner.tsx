import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className=" bg-[#f5f5f5]">
        <div className=" ">
          <div className="grid lg:grid-cols-2 items-center gap-8 p-12 py-[30px] ">
            <div>
              <h2 className="sm:text-[2.1rem] text-2xl leading-[1.2em] font-bold text-[#21225F] tracking-wider">
                Start learning from the world’s best institutions
              </h2>
              <p className="my-[20px] text-[14px] text-[#808292]">
                Flexible easy to access learning opportunities can bring a
                significant change in how individuals prefer to learn! The Edla
                can offer you to enjoy the beauty of eLearning!
              </p>
              <div className="sm:flex">
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="sm:w-[70%] w-[100%] outline-none p-4"
                />
                <Button
                  searchIcon
                  text={"Search Now"}
                  className={
                    "whitespace-nowrap rounded-none bg-[#08A9E6] text-white border-none !p-5   sm:mt-0 mt-4  text-center"
                  }
                />
              </div>
              <div className="my-[15px] sm:flex gap-6 items-center">
                <div className="flex">
                  <Image
                    src={"/user1.jpg"}
                    alt="user"
                    width={52}
                    height={52}
                    className=" rounded-full p-[3px] bg-white border border-[#e5e5e5]"
                  />
                  <Image
                    src={"/user2.jpg"}
                    alt="user"
                    width={52}
                    height={52}
                    className="ml-[-8px] rounded-full p-[3px] bg-white border border-[#e5e5e5]"
                  />
                  <Image
                    src={"/user3.jpg"}
                    alt="user"
                    width={52}
                    height={52}
                    className="ml-[-8px] rounded-full p-[3px] bg-white border border-[#e5e5e5]"
                  />
                </div>
                <div>
                  <div className="text-[#808292] sm:mt-0 mt-4">
                    <p>
                      Need help?{" "}
                      <Link href={"#"} className="underline">
                        {" "}
                        Contact our Edla support
                      </Link>
                    </p>
                    <p>Tell us about your query</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 items-center relative">
              <div className="justify-end flex">
                <Image
                  src="/banner01.jpg"
                  alt="banner"
                  width={200}
                  height={200}
                  className="rounded-bl-[25%] z-[2] sm:relative md:static    left-[100px]"
                />
              </div>
              <div className="grid gap-[10px] md:justify-end ">
                <Image
                  src="/banner02.jpg"
                  alt="banner"
                  width={210}
                  height={150}
                  className="rounded-tl-[25%] z-[2] relative"
                />
                <Image
                  src="/banner03.jpg"
                  alt="banner"
                  width={210}
                  height={150}
                  className="rounded-tr-[25%] z-[2] relative"
                />
              </div>
              <Image
                src="/dotts.png"
                alt="banner"
                width={300}
                height={300}
                className="absolute top-6 left-[100px]"
              />
              <Image
                src="/dotts.png"
                alt="banner"
                width={160}
                height={200}
                className="absolute bottom-6 left-0"
              />
              <Image
                src="/net.png"
                alt="banner"
                width={160}
                height={200}
                className="absolute bottom-[-30px] right-[-30px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
