import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";

const LatestNews = () => {
  return (
    <>
      <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
        <h2 className="text-3xl font-semibold my-8 text-center">
          Read Our Latest Tech News
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {latestNewsArray?.map((item, index) => {
            return (
              <div
                className="max-w-[410px] rounded-xl bg-white shadow-xl"
                key={index}
              >
                <div>
                  <Image
                    className="rounded-xl"
                    src={item.imageUrl}
                    alt={"image"}
                    width={410}
                    height={260}
                  />
                </div>
                <div>
                  <div className="contentbox p-[30px]">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src={"/calendar.png"}
                            alt="calendar"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-sm">{item.date}</span>
                      </div>
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src={"/png/user.png"}
                            alt="user"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-sm">{item.username}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg my-4">
                        {item.title}
                      </h3>
                      <Button
                        text={"Read more"}
                        className={"text-blue-500 border !border-blue-500"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LatestNews;
const latestNewsArray = [
  {
    imageUrl: "/best-seller/01.jpg",
    date: "20 Jan 2022",
    userImage: "/png/user.png",
    username: "Mark Hanry",
    title: "Ask the Expert: Typography Talk with Mark Hanry",
  },
  {
    imageUrl: "/best-seller/02.jpg",
    date: "20 Jan 2022",
    userImage: "/png/user.png",
    username: "Mark Hanry",
    title: "Ask the Expert: Typography Talk with Mark Hanry",
  },
  {
    imageUrl: "/best-seller/03.jpg",
    date: "20 Jan 2022",
    userImage: "/png/user.png",
    username: "Mark Hanry",
    title: "Ask the Expert: Typography Talk with Mark Hanry",
  },
];
