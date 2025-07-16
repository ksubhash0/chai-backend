
import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRETE
});

const uploadToCloudinary = async (localFile) => {
    try {
        if(!localFile) return null;

        const response = cloudinary.uploader.upload(localFile, {
            resource_type: 'auto'
        })

        console.log('uploaded to cloudinary', response);
        return response
    } catch (error) {
        fs.unlinkSync(localFile)
        return null
    }
}

export {uploadToCloudinary}