

import { connect } from "@/app/dbConfig";
import Courses from '../../models/coursesModels'

import { NextRequest, NextResponse } from "next/server";
import { Anonymous_Pro } from "next/font/google";

connect()
export async function POST(request:NextRequest, response:NextResponse) {
    try {
        const body = await request.json()
        const course = new Courses(body)
        const newCourse = await course.save()
        return NextResponse.json({
            message: "Course created successfully",
            success: true,
            newCourse,
          });

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}


export async function PUT(request:NextRequest, response:NextResponse) {
    try {
        const { field, url, courseId } = await request.json()

        const update = { [field]: url }
        const course = await Courses.findByIdAndUpdate(courseId, update, { new: true });

        return NextResponse.json({
            message: "Course update successfully",
            success: true,
            course,
          });

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  
}