"use client";
import { useState } from "react";

interface faqProp {
  faqCollection?: any;
}
const FaqComponent = ({ faqCollection }: faqProp) => {
  const [faq, setFaq] = useState("");
  const faqToggle = (value: string) => {
    faq === "" ? setFaq(value) : faq !== value ? setFaq(value) : setFaq("");
  };
  return (
    <div className="grid gap-4">
      {faqCollection?.map((value: any, index: any) => {
        return (
          <div key={index} className="p-2 bg-[#e5e5e5] rounded-md">
            <h3
              className="font-semibold flex justify-between"
              onClick={() => faqToggle(value?.question)}
            >
              <p>
                {" "}
                Que:{index + 1} {value?.question}{" "}
              </p>
              <span>{faq !== value?.question ? "+" : "-"}</span>
            </h3>
            {faq === value?.question && (
              <p className="mt-2">Ans: {value?.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FaqComponent;
