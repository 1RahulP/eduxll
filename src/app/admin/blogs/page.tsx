import { Input, Textarea } from "@nextui-org/react"

const Blogs = () =>{
    return(
        <div className="p-4">
             <div className="grid gap-4">
      <Input label="Title" className="w-[600px]" />
      <div>
        <label htmlFor="course_image" className="mb-2 text-sm ml-2">
          Course Image
        </label>

        <Input type="file" id="course_image" className="w-[600px]" />
      </div>
      <Input label="Course duration" className="w-[600px]" />
      <div>
        <label htmlFor="broch" className="mb-2 text-sm ml-2">
          Brochure File
        </label>

        <Input type="file" id="broch" className="w-[600px]" />
      </div>
      <Textarea label="Description" />
    </div>
        </div>
    )
}
export default Blogs