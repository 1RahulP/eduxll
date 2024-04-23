import Image from "next/image";
import Button from "../button/Button";
import React from "react";
import Link from "next/link";

interface LatestNewsProps {
  response?: any;
}

// eslint-disable-next-line @next/next/no-async-client-component
const LatestNews = async ({ response }: LatestNewsProps) => {
  const latestNewsArray = response;

  return (
    <>
      <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
        <div className="relative">
          <h2 className="text-3xl font-semibold my-8 text-center">
            Read Our Latest Blogs
          </h2>
          <Button
            text={"VIEW ALL  "}
            className={
              "absolute top-[0px] right-[0px] px-6 py-2 border text-[#000] !border-[#000] !rounded-[0px] hover:bg-[#000] hover:text-[#fff]"
            }
          />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {latestNewsArray?.map((item: any, index: any) => {
            return (
              <>
                {item?.category === "blogs" && (
                  <div
                    className="max-w-[410px] rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer"
                    key={index}
                    // onClick={() => redirect(`/news/${item.slug}`)}
                  >
                    <Link href={`/news/${item.slug}`}>
                      <div>
                        <Image
                          className="rounded-xl"
                          src={item.featureImage}
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
                              <span className="text-sm">20 Jan 2022</span>
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
                              <span className="text-sm">Mark Hanry</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg my-4">
                              {item.title}
                            </h3>
                            <Link href={`/news/${item.slug}`}>
                              <Button
                                text={"Read more"}
                                className={
                                  "text-blue-500 border !border-blue-500"
                                }
                              />
                            </Link>
                            {/* 
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.content as string,
                              }}
                            /> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LatestNews;
