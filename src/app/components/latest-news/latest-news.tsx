"use client";
import Image from "next/image";
import Button from "../button/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface LatestNewsProps {
  response?: any;
}

const LatestNews = () => {
  const [blogData, setBlogData] = useState<any>([]);

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/blog");
    if (data.status === 200) {
      setBlogData(data?.data);
    }
  };

  useEffect(() => {
    getAllBlogsData();
  }, []);

  console.log("blogData", { blogData });
  const latestNewsArray = blogData;
  const onlyThree = latestNewsArray?.slice(0, 4);

  const filterBlogData = latestNewsArray?.filter((item: any) => {
    return item?.category === "blogs";
  });

  const sliceData = filterBlogData?.slice(0, 3);
  console.log("onlyThree", sliceData?.length);

  return (
    <>
      <section>
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="relative">
            <h2 className="text-3xl font-semibold my-8 text-center">
              Read Our Latest Blogs
            </h2>
            <Button
              text={"View All  "}
              className={
                "absolute top-[0px] right-[0px] justify-center items-center gap-spacing8 inline-flex whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 min-w-124px"
              }
            />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {sliceData?.map((item: any, index: any) => {
              return (
                <div
                  className="max-w-[410px] rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer"
                  key={index}
                >
                  <Link href={`/blogs/${item.slug}`}>
                    <div className="h-[230px]">
                      <Image
                        className="rounded-xl h-[230px] object-cover"
                        src={item.featureImage}
                        alt={"image"}
                        width={410}
                        height={230}
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <div className="contentbox p-[30px]">
                        {/* <div className="flex justify-between">
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
                        </div> */}
                        <div>
                          <h3 className="text-[16px] font-semibold mb-4">
                            {item?.title}
                          </h3>
                          <Link href={`/news/${item?.slug}`}>
                            <Button
                              text={"Read more"}
                              className={
                                "   bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg   text-white font-medium     min-w-124px"
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default LatestNews;
