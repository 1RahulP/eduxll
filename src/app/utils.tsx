import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./_firebase/config";



export const uploadFiletoFirebase = async (image: File) => {
    const imgRef = ref(storage, `images/blog/${image["name"]}`);
    const snapshot = await uploadBytesResumable(imgRef, image);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  };