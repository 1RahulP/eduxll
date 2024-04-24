"use client";
import React, { useState } from "react";
import SideBarLayout from "../../ui/sidebarlayout/page";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { set } from "mongoose";
import { uploadFiletoFirebase } from "@/app/utils";
import { createCourse, updateCourseFields } from "@/app/actions";
import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import { useRouter } from "next/navigation";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const CreateCourse = () => {
  const [courseImage, setCourseImage] = useState<any>(null);
  const [courseBrochure, setCourseBrochure] = useState<any>(null);
  const [courseCertificate, setCourseCertificate] = useState<any>(null);
  const [blogPopup, setBlogPopup] = React.useState(false);

  const [loading, setLoadig] = useState<Boolean>(false);
  const router = useRouter();

  const [courses, setCourses] = useState({
    title: "",
    category: "",
    duration: "",
    description: "",
    certificateDescription: "",
    courseImage: "",
    certificate: "",
    brochure: "",
    metaTitle: "",
    metaDescription: "",
  });
  const [courseModule, setCourseModule] = useState([
    {
      id: 1,
      modulTitle: "",
      modulDescription: "",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadig(true);
    e.preventDefault();
    const courseData = { ...courses, courseModule: courseModule };
    const response = await axios.post("/api/course", courseData);

    if (response.status === 200) {
      if (courseImage) {
        const url = await uploadFiletoFirebase(courseImage);
        const data = {
          field: "courseImage",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/course", data);
      }

      if (courseBrochure) {
        const url = await uploadFiletoFirebase(courseBrochure);
        if (url) {
          const data = {
            field: "brochure",
            url: url,
            courseId: response.data.newCourse._id,
          };
          const response2 = await axios.put("/api/course", data);
        }
      }

      if (courseCertificate) {
        const url = await uploadFiletoFirebase(courseCertificate);
        const data = {
          field: "certificate",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/course", data);
      }
    }
    setBlogPopup(true);
    setLoadig(false);
  };

  const addMoreModuee = () => {
    setCourseModule([
      ...courseModule,
      { id: courseModule.length + 1, modulTitle: "", modulDescription: "" },
    ]);
  };
  const removeModule = (id: number) => {
    setCourseModule(courseModule.filter((module) => module.id !== id));
  };

  return (
    <>
      <SideBarLayout>
        {blogPopup && (
          <LinkModelBox
            buttonclose={() => setBlogPopup(false)}
            buttonsave={() =>
              router.push("/admin/newdashboard/course/course-list")
            }
            modelheading="Course"
            itemicon="sussess"
            modelcontent="Course Created Sussessfully"
          />
        )}
        <div className="flex items-center justify-between border-b-[1px] border-slate-200 px-[15px] pb-[15px] mb-[20px]">
          <h2>Create Course</h2>
        </div>

        <div className="bg-[#fff] rounded-[10px] p-8">
          <div className="flex flex-col w-full flex-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full flex-1"
            >
              <div className="grid grid-cols-[2fr_1fr] gap-[30px]  justify-center">
                <div className="inputfieldbox ">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <div className="w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Title
                      </label>
                      <input
                        type="text"
                        placeholder="Course Title"
                        name="title"
                        className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses?.title}
                        onChange={(e) =>
                          setCourses({ ...courses, title: e.target.value })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Category
                      </label>
                      <input
                        type="text"
                        placeholder="Category"
                        name="category"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.category}
                        onChange={(e) =>
                          setCourses({ ...courses, category: e.target.value })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Duration
                      </label>
                      <input
                        type="text"
                        placeholder="Course Duration"
                        name="duration"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.duration}
                        onChange={(e) =>
                          setCourses({ ...courses, duration: e.target.value })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Description
                      </label>
                      <IRichTextEditor
                        id="rte"
                        sticky={false}
                        controls={[
                          ["bold", "italic", "underline"],
                          ["link", "image", "video", "blockquote", "code"],
                          ["unorderedList", "h1", "h2", "h3"],
                          ["alignLeft", "alignCenter", "alignRight"],
                        ]}
                        value={courses.description}
                        onChange={(value) =>
                          setCourses({ ...courses, description: value })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Certificate Description
                      </label>
                      <IRichTextEditor
                        id="rte"
                        sticky={false}
                        controls={[
                          ["bold", "italic", "underline"],
                          ["link", "image", "video", "blockquote", "code"],
                          ["unorderedList", "h1", "h2", "h3"],
                          ["alignLeft", "alignCenter", "alignRight"],
                        ]}
                        value={courses.certificateDescription}
                        onChange={(value) =>
                          setCourses({
                            ...courses,
                            certificateDescription: value,
                          })
                        }
                      />
                    </div>

                    <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                      <div className="rounded-md flex flex-col gap-[5px]  p-[10px]  border border-slate-400/60">
                        {courseModule?.map((item, index) => {
                          return (
                            <React.Fragment key={item?.id}>
                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Modul Title
                                </label>

                                <input
                                  type="text"
                                  placeholder="Modul Title"
                                  name="modultitle"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulTitle}
                                  onChange={(e) => {
                                    setCourseModule(
                                      courseModule.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulTitle: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                />

                                {index > 0 && (
                                  <p onClick={() => removeModule(item?.id)}>
                                    Del
                                  </p>
                                )}
                              </div>

                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Modul Description
                                </label>
                                <textarea
                                  placeholder="Modul Description"
                                  name="modulDescription"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulDescription}
                                  onChange={(e) => {
                                    setCourseModule(
                                      courseModule.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulDescription: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => addMoreModuee()}
                        className="text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
                      >
                        <Image
                          src="/add-line.svg"
                          width={20}
                          height={20}
                          alt="add"
                        />
                        Add More
                      </button>
                    </div>
                  </div>
                </div>

                <div className="inputfile flex flex-col gap-[10px] pt-[25px]">
                  <div className="flex ">
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload Course Image
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="courseImage"
                        onChange={(e: any) => setCourseImage(e.target.files[0])}
                      />
                    </label>

                    {courseImage && (
                      <Image
                        src={URL.createObjectURL(courseImage)}
                        width={100}
                        height={100}
                        alt="courseImage"
                      />
                    )}
                  </div>

                  <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Upload Course Certificate
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      name="certificate"
                      onChange={(e: any) =>
                        setCourseCertificate(e.target.files[0])
                      }
                    />
                  </label>

                  <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Upload Course Brochure
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      name="brochure"
                      onChange={(e: any) =>
                        setCourseBrochure(e.target.files[0])
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="mt-[10px] bg-[#ffe4e6] flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-[#fda4af]">
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    placeholder="Meta Title"
                    name="Meta Title"
                    className="bg-[#fff] text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300   px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    required
                    value={courses.metaTitle}
                    onChange={(e) =>
                      setCourses({ ...courses, metaTitle: e.target.value })
                    }
                  />
                </div>
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Meta description
                  </label>
                  <input
                    type="text"
                    placeholder="Meta description"
                    name="meta description"
                    className="bg-[#fff] text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300  px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    required
                    value={courses.metaDescription}
                    onChange={(e) =>
                      setCourses({
                        ...courses,
                        metaDescription: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {loading && <p>Loading...</p>}

              {!loading && (
                <button
                  type="submit"
                  className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </SideBarLayout>
    </>
  );
};
export default CreateCourse;
