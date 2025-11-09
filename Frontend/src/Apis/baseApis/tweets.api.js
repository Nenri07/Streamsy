// api/tweetsApi.js
import axios from "./axios";

export class TweetsApi {
    async getAllTweets(page = 1, abortSignal = null) {
        try {
            const config = {
                params: { page, limit: 10 }
            };
            
            if (abortSignal) {
                config.signal = abortSignal;
            }

            const response = await axios.get('/tweet', config);
            
            //return response data
            return response.data;
            
        } catch (error) {
            if (error.name === 'CanceledError' || error.name === 'AbortError') {
                console.log('Tweet request was cancelled');
                return null; 
            }
            
            throw new Error(`Error while fetching tweets: ${error.message}`);
        }
    }   
}

const tweetApi = new TweetsApi();
export default tweetApi;