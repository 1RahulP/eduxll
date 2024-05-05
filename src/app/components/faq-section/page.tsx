"use client";
import Image from "next/image";
import { useState } from "react";

const FaqNew = () => {
  const [showFaq, setShowFaq] = useState("");

  const faqToggle = (faq: any) => {
    showFaq === "" ? setShowFaq(faq) : setShowFaq("");
  };

  return (
    <div className="sm:my-16 my-8 md:mx-16 sm:px-16 px-4">
      <h3 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
        Frequently Asked Questions
      </h3>
      <div className="grid gap-4">
        {faqCollection?.map((item, index) => {
          return (
            <div
              key={index}
              className=" border border-dashed rounded-md overflow-hidden"
            >
              <div
                className="flex justify-between cursor-pointer p-4 bg-[#f3f4f678] cursor-pointer"
                onClick={() => faqToggle(item.ques)}
              >
                <h4 className="text-[15px] font-[500] text-[#000] !mb-[0px]">
                  {item.ques}
                </h4>
                <Image
                  src={"/svg/arrow-down.svg"}
                  alt="arrow-down"
                  width={12}
                  height={12}
                />
              </div>
              {showFaq === item.ques && (
                <p className="p-4   sm:text-sm text-xs text-[#767676] font-[400]">
                  {item.ans}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FaqNew;

const faqCollection = [
  {
    ques: "Will I gain access to any sort of Forum support?",
    ans: "Yes. You will gain complete access to our forum support to connect with our fellow aspiring users.",
  },
  {
    ques: "Apart from these courses, will I get access to any practice platforms?",
    ans: "You will gain access to CodeKata which is a gamified practice platform which hosts 1000+ curated coding problems and IDE, which is an Integrated Development Environment that lets you write, edit, run, test & debug your code.",
  },
  {
    ques: "On what basis are the certificates rolled out?",
    ans: "UiPath certification is available for a nominal fee. If paid, you will receive an E-certificate through email as soon as you complete the course with 100% progress.",
  },
  {
    ques: "Is it 100% online learning or should I come in person for any specific course?",
    ans: "It is a 100% online learning course package and there won’t be any necessity for you to be present in person.",
  },
];
