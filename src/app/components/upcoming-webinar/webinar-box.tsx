"use client";
import Image from "next/image";
import React from "react";
import BadgeChip from "../badge";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const WebniarBox = ({ response, category }: any) => {
  const filterData = response?.filter(
    (item: any) => item?.category === category
  );

  const router = useRouter();

  // const webinarSlug = (item: any) => {
  //   // console.log(globalState,"ggggggg");
  //   // setGlobalState(item);
  //   router.push(`/webinars/free-classes/${item?.slug}`);

  // };

  console.log("websniar response", { response });

  return (
    <>
      {filterData?.length > 0 &&
        filterData?.map((item: any, index: any) => {
          console.log("websniar item", { item });
          const formattedDate = format(
            new Date(item?.date),
            " do MMM '|' EEEE,"
          );
          const time = item?.time;
          const hours = time.split(":")[0];
          const minutes = time.split(":")[1];
          const AMPM = hours >= 12 ? "PM" : "AM";
          const newHours = hours % 12 || 12;
          const formattedTime = `${newHours}:${minutes} ${AMPM}`;
          console.log("formattedTime", formattedTime);
          const content = item?.content.replace(/"/g, "");
          return (
            <>
              <div
                key={index}
                className="border rounded-xl bg-[#f8f9fb] rounded-md shadow-xl cursor-pointer"
                onClick={() =>
                  // webinarSlug(item)
                  router.push(`/webinars/free-classes/${item?.slug}`)
                }

                //style={{ marginRight: "20px" }}
              >
                <div>
                  <div className="gap-4 relative">
                    <div>
                      <Image
                        src={item?.featureImage}
                        alt="image"
                        width={362}
                        height={201}
                        className="w-full rounded-xl"
                      />
                    </div>
                    <div className="p-4">
                      <div>
                        <BadgeChip
                          theme="success"
                          className="w-fit rounded-md text-sm"
                        >
                          UPCOMING
                        </BadgeChip>
                        <h3 className="text-xl font-semibold my-2">
                          {formattedDate} |{formattedTime}
                        </h3>
                        <p className="text-md">
                          <div dangerouslySetInnerHTML={{ __html: content }} />
                        </p>
                        <p className="font-semibold mt-4">{item?.name}</p>
                        <p className="text-sm line-clamp-1">
                          {item?.description}
                        </p>
                      </div>
                      <Button
                        text={"Register Now"}
                        className={"!block w-fit text-red-500 !rounded-md mt-6"}
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default WebniarBox;
