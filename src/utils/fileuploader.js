import {v2} from "cloudinary"
import { response } from "express";
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
  api_key:  process.env.CLAUDINARY_API_KEY,
  api_secret: process.env.CLAUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath)=>{
    try{
        if(!filePath) return null;
        //upload the file on cloudinary
cloudinary.uploader.upload(filePath,{
    folder : "user_files",
    resource_type : "auto"
})
console.log("File uploaded successfully on Cloudinary",response.url);
return response;

//file has been uploded on cloudinary, 
    } catch (error) {
       fs.unlinkSync(localStoragePath)
       return null;
    }
}



export default uploadOnCloudinary;