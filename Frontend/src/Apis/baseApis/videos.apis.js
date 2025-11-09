// import React from "react";

// export  class videosApi{
 
//  async getAllVideos(abortsignal){
//     try {
//         const response = await axios.get('',{
//             signal: abortsignal,
//         })
//         if(response){
//             console.log("this is the response from getAllVideos",response.data);
//             return response.data
//         }

        
//     } catch (error) {
//         throw new Error("Error while fetching all videos",error);
//     }
//  }   
// }


// const videoapi= new videosApi();
// export default videoapi


// api/videosApi.js
// api/videosApi.js
import axios from "./axios";

export class VideosApi {
    async getAllVideos(page = 1) {
        try {
            const response = await axios.get(`/videos?page=${page}&limit=10`);
            return response.data;
        } catch (error) {
            throw new Error(`Error while fetching videos: ${error.message}`);
        }
    }   
}

const videoApi = new VideosApi();
export default videoApi;