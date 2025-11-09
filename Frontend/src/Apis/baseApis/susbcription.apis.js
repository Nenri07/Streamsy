

 class subService{
    privateAxios;

    constructor(axiosInstance){
        this.privateAxios= axiosInstance
    }
async getSubsribers(channelId,abortsignal){
    console.log("this is the channelId in getSubscribers",channelId);
    console.log("this is the abortsignal in getSubscribers",abortsignal);
    
    
    try {
        const response= await this.privateAxios.get(`/subscription/c/${channelId}`,{
            signal: abortsignal,
            withCredentials: true
        })
        if(response){
            console.log("this is the response from getSubscribers",response.data);
            return response.data
            
        }
        
    } catch (error) {
        throw new Error("Error while fetching subscribers",error);
    }
}
}

// const subService= new subscriptionService()
export default subService