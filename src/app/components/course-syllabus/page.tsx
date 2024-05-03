"use client";
import Image from "next/image";
import { useState } from "react";
import Inner from "./inner-syllabus/page";

const CourseSyllabusPage = ({ response }: any) => {
  const [toggleSylabbus, setToggleSyllabus] = useState("");
  const syllabus = (value: any) => {
    toggleSylabbus === "" ? setToggleSyllabus(value) : setToggleSyllabus("");
  };
  return <Inner toggleSylabbus={toggleSylabbus} syllabus={syllabus} />;
};
export default CourseSyllabusPage;
