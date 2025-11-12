import {PutObjectCommand,S3Client} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'

const s3Client= new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
})


const videoUploadtoAws= async(filename,buffer,contentType="video/mp4")=>{
    const key = `uploads/user-upload/${Date.now()}-${filename}`;

    try {
        const command= new PutObjectCommand({
            Bucket:process.env.AWS_UPLOAD_BUCKET,
            Key:key,
            ContentType:contentType,
            ACL:'private',
            Body:buffer
        })
        //work for security with this presigned in future
        // const awsUrl= await getSignedUrl(s3Client,command,{
        //     expiresIn:60*5
        // })
        await s3Client.send(command)
        console.log("uploaded to AWS:",key);
        return {key}
    } catch (e) {
        console.error("this is AWS Error while Uploading",e)
     
        
    }
}


export {videoUploadtoAws}