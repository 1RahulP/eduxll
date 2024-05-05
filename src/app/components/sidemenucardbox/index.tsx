"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SideMenuCardboxProp {
  listArray?: any;
  activeTab?: string;
  activeCourseBranch?: string;
}

const SideMenuCardbox = ({
  listArray,
  activeTab,
  activeCourseBranch,
}: SideMenuCardboxProp) => {
  const [data, setData] = useState<any>([]);
  const [popUp, setPopUp] = useState("");

  const getAllCourses = async () => {
    // if active tab is view all then fetch all courses
    if (activeTab === "view-all") {
      const data = await axios.get("/api/course");
      if (data.status === 200) {
        setData(data?.data);
      }
    } else {
      const data = await axios.get(`/api/course?category=${activeTab}`);
      if (data.status === 200) {
        setData(data?.data);
      }
    }
  };

  useEffect(() => {
    getAllCourses();
  }, [activeTab]);

  const getNestedCoursesbyBranch = async () => {
    const data = await axios.get(`/api/course/branch/${activeCourseBranch}`);
    console.log("test sgwg", data);
    if (data.status === 200) {
      setData(data?.data);
    }
  };

  useEffect(() => {
    if (activeCourseBranch) {
      getNestedCoursesbyBranch();
    }
  }, [activeCourseBranch]);

  const isFeatured = data?.filter(
    (item: any) => item?.featureCategoryInsert[0]?.value === "latest-card"
  );

  const router = useRouter();
  return (
    <>
      {isFeatured?.map((item: any, index: number) => {
        const slug = item.title.replace(/\s+/g, "-").toLowerCase();
        return (
          <div
            key={index}
            className="hover:bg-[#d5d5d5] bg-[#ebebeb] flex items-center gap-[10px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px] cursor-pointer"
            onClick={() => router.push(`/product/${item?.slug}`)}
          >
            <div className="logo h-[100px] w-[100px]">
              <Image
                src={item.courseImage || "/logo/IBM-Logo-Blk---Square.png"}
                width={100}
                height={100}
                alt=""
                objectFit="cover"
                className=" rounded-[5px] object-cover h-[100px] w-[100px]"
              />
            </div>
            <div className="contentbox flex-1">
              <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
                {item.courseBranch[0]?.label}
              </h4>
              <h4 className="text-[13px] font-[400] text-[#000] p-0 m-0 mt-[5px]">
                {item.title.substring(0, 40)}
              </h4>
              <p className="text-[13px] font-[400] text-[#6e6d6d] p-0 m-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description
                      .substring(0, 40)
                      .replace(/<[^>]*>/g, ""),
                  }}
                ></div>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SideMenuCardbox;
