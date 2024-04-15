"use client"
import Button from "@/app/components/button/Button";
import { useRouter } from "next/navigation";

const Courses = () => {
    const router = useRouter()
  return (
    <div className="p-4">
      <Button text={"Create course"} onClick={()=>router.push("/admin/courses/create-course")} />
    </div>
  );
};
export default Courses;
