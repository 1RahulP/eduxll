
import React from "react";

import SideBarLayout from "../../../ui/sidebarlayout/page";

import EditBlogForm from "@/app/components/blog/EditBlogForm";



const page = async () => {
   
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
         <EditBlogForm />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
