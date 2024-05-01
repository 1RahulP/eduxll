"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RelatedBlogs = () => {
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

  //   only show 3 related blogs on the blog page
  const filterBlogData = blogData?.filter((item: any, index: any) => {
    return index < 3;
  });

  return (
    <div>
      {filterBlogData?.map((item: any, index: any) => {
        console.log("related blogData", { item });

        return (
          <>
            <li
              key={index}
              className="border-b-[1px] border-[#efefef]  last-of-type:border-b-[0px]  pb-[15px]"
            >
              <div className="flex gap-[10px]">
                <div className="image  ">
                  <Image
                    src={item?.featureImage}
                    width={70}
                    height={70}
                    objectFit="cover"
                    alt={item.title}
                    className=""
                  />
                </div>
                <div className="content flex-1">
                  <p className="text-wrap line-clamp-2 text-[13px] text-[#464646]">
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default RelatedBlogs;
