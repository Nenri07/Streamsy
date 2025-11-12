// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs'



//     // Configuration
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_CLOUD_API, 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     });

//     const uploadOnCloudinary= async (localFilePath)=>{
//         try {
//             if(!localFilePath) return null

//             //uploading on cloudinary
//             const response = await cloudinary.uploader.upload(localFilePath,{
//                 resource_type:"auto"
//             })

//             // console.log('file uploaded successfuly', response.url);

//             fs.unlinkSync(localFilePath)
//             return response
            
            
//         } catch (error) {
//             fs.unlinkSync(localFilePath)
//             //remove the uploadef file as failed the process 
//             return null
            
//         }

//     }
    
//     export {uploadOnCloudinary}
    

// utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (buffer, options = {}) => {
  if (!buffer) return null;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        ...options,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    // Convert buffer to stream and pipe
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

export { uploadOnCloudinary };


