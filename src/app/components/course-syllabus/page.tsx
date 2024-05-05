"use client";
import Image from "next/image";
import { useState } from "react";
import Inner from "./inner-syllabus/page";

const CourseSyllabusPage = ({ courseModule }: any) => {
  const [toggleSylabbus, setToggleSyllabus] = useState("");

  const syllabus = (value: any) => {
    toggleSylabbus === "" ? setToggleSyllabus(value) : setToggleSyllabus("");
  };
  return <Inner toggleSylabbus={toggleSylabbus} syllabus={syllabus} courseModule={courseModule} />;
};
export default CourseSyllabusPage;
