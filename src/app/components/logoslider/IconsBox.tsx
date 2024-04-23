"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blog from "@/app/models/blogModels";
import { connect } from "@/app/dbConfig";

// eslint-disable-next-line @next/next/no-async-client-component
const IconsBox = ({ response, categories }: any) => {
  console.log("icon box", { response });

  const filterData = response?.filter(
    (item: any) => item?.category === categories
  );
  return (
    <div>
      {filterData?.length > 0 &&
        filterData?.map((item: any, index: any) => {
          return (
            <>
              <div
                className="flex  items-center justify-center h-[100% ] "
                key={item?._id}
              >
                {categories === "news" ? (
                  <>
                    <a href={`${item?.link}`} target="_blank">
                      <Image
                        src={item?.featureImage}
                        width={100}
                        height={36}
                        alt=""
                        objectFit="contain"
                        objectPosition="center"
                        className="brightness-100 transition-all hover:transition-all cursor-pointer "
                        // className="brightness-100 transition-all hover:transition-all contrast-0 hover:brightness-auto hover:contrast-100"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <Image
                      src={item?.featureImage}
                      width={100}
                      height={36}
                      alt=""
                      objectFit="contain"
                      objectPosition="center"
                      className="brightness-100 transition-all hover:transition-all "
                      // className="brightness-100 transition-all hover:transition-all contrast-0 hover:brightness-auto hover:contrast-100"
                    />
                  </>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default IconsBox;
