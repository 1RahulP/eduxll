"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useParams } from "next/navigation";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const options = [
  { value: 'blogs', label: 'Blog' },
  { value: 'course-blog', label: 'Course Blog' },
  { value: 'study-aboard-blog', label: 'Study Aboard blog' }
]
const animatedComponents = makeAnimated();

const EditBlogForm = () => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    mtitle: "",
    mdescription: "",
  });

  const getSingleBlog = async () => {
    try {
      const respone = await axios.get(`/api/blog/${slug}`);
      if (respone?.data) {
        setBlog({
          title: respone.data.title,
          content: respone.data.content,
          mtitle: respone.data.mtitle,
          mdescription: respone.data.mdescription,
        });

        console.log(respone.data);
        setCategory(respone.data.customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/blog/${slug}`, {
        ...blog,
        customCategory: category,
      });
      if (response?.status === 200) {
        getSingleBlog();
        setLoadig(false);
      setBlogPopup(true);
      }
      
    } catch (error) {
      console.log(error);
      setLoadig(false);
    }
  };

  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/newdashboard/bloglist")}
          modelheading="Blogs"
          itemicon="sussess"
          modelcontent="Blogs Edit Sussessfully"
        />
      )}

      <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
        <h2>Edit Blog</h2>
      </div>

      <div className="flex flex-col   bg-[#fff] p-8 w-full rounded-[10px]">
        <form className="flex flex-col">
          <div className="grid grid-cols-[2fr_1fr] gap-8 justify-center">
            <div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Meta Title
                </label>
                <input
                  type="text"
                  placeholder="Meta Title"
                  name="mtitle"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.mtitle}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mtitle: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Meta description
                </label>
                <input
                  type="text"
                  placeholder="Meta description"
                  name="mdescription"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.mdescription}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mdescription: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Blog Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.title}
                  onChange={(e: any) =>
                    setBlog({ ...blog, title: e.target.value })
                  }
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Blog Category
                </label>
                <Select
                  options={options}
                  isMulti
                  components={animatedComponents}
                  onChange={(value: any) => setCategory(value)}
                  value={category}
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Blog Content
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
                  value={blog.content}
                  onChange={(value, delta, sources) =>
                    setBlog({ ...blog, content: value })
                  }
                />
              </div>
            </div>
          </div>

          {loading && (
            <button
            className="text-white p-2 rounded-md max-w-[636px]"
          >
           
            <div className="ball"></div>
            <div className="ball"></div>
          
             </button>
           
          )}

          {!loading && (
            <button
              onClick={handleSubmit}
              className="bg-black text-white p-2 rounded-md max-w-[636px]"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default EditBlogForm;
