"use client";
import React from "react";
import SideBarLayout from "../../ui/sidebarlayout/page";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const CreateCourse = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const response = await axios.post("/api/blog/create-blog", formData);
    console.log(response);
  };

  return (
    <>
      <SideBarLayout>
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
                      />
                    </div>
                    <div className="w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        status
                      </label>
                      <input
                        type="text"
                        placeholder="Course status"
                        name="status"
                        className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
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
                        //   value={state.content}
                        //   onChange={(value, delta, sources) =>
                        //     onChangeState("content", value)
                        //   }
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
                        //   value={state.content}
                        //   onChange={(value, delta, sources) =>
                        //     onChangeState("content", value)
                        //   }
                      />
                    </div>

                    <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                      <div className="rounded-md flex flex-col gap-[5px]  rounded-md  p-[10px]  border border-slate-400/60">
                        <div className="w-full">
                          <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                            Modul Title
                          </label>
                          <input
                            type="text"
                            placeholder="Modul Title"
                            name="modultitle"
                            className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                            Modul Description
                          </label>
                          <textarea
                            placeholder="Modul Description"
                            name="modulDescription"
                            className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                            required
                          />
                        </div>
                      </div>

                      <button className="text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700">
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
                    <input type="file" className="hidden" name="featureImage" />
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
                      Upload Course Certificate
                    </span>
                    <input type="file" className="hidden" name="certificate" />
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
                    <input type="file" className="hidden" name="brochure" />
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
                  />
                </div>
              </div>
              <button className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </SideBarLayout>
    </>
  );
};
export default CreateCourse;
