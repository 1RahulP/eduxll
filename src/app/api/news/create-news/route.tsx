import { storage } from "@/app/_firebase/config";
import { connect } from "@/app/dbConfig";
import News from "@/app/models/newsModels";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const featureImage = formData.get("featureImage");

    let featuredImageUrl = "";
    const slug = generateSlug(formData.get("title") as string);

    if (featureImage) {
      const url = await uploadImagetoFirebase(featureImage as File);
      featuredImageUrl = url;
    }

    const newsData = {
      title: formData.get("title") as string,
      slug: slug,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
      featureImage: featuredImageUrl,
      mtitle: formData.get("mtitle") as string,
      mdescription: formData.get("mdescription") as string,
    };

    const n = new News(newsData);
    const news = await n.save();

    return NextResponse.json({
      message: "News created successfully",
      success: true,
      news,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const uploadImagetoFirebase = async (image: File) => {
  const imgRef = ref(storage, `images/news/${image["name"]}`);
  const snapshot = await uploadBytesResumable(imgRef, image);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};

const findBlogAndUpdateImage = async (id: string, imageUrl: string) => {
  try {
    const blog = await News.findById(id);
    if (blog) {
      blog.featureImage = imageUrl;
      await blog.save();
    }
    return blog;
  } catch (error) {
    return error;
  }
};

function generateSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
