import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
  api_key:  process.env.CLAUDINARY_API_KEY,
  api_secret: process.env.CLAUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localPath)=>{
    try{
        if(!localPath) return null;
        //upload the file on cloudinary
 const response = await cloudinary.uploader.upload(localPath,{
    folder : "user_files",
    resource_type : "auto"
})
console.log("File uploaded successfully on Cloudinary",response.url);
return response;

//file has been uploded on cloudinary, 
    } catch (error) {
       fs.unlinkSync(localPath)
       return null;
    }
}



export { uploadOnCloudinary }