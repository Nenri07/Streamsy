import React, { useEffect, useState } from 'react'
import subService from '../Apis/baseApis/susbcription.apis';
import { useSelector } from 'react-redux';
import useaxiosPrivate from '../hooks/useaxiosPrivate';




function SusbcribeComponent() {

  const [subscribers, setSubscribers] = useState([])
  const privateAxios = useaxiosPrivate()
  const subServiceInstance = new subService(privateAxios)
  const channelId = useSelector((state) => state.auth.userData?._id)
  useEffect(() => {
    let isMounted = true;
    const cotroller = new AbortController()
    const abortSignal = cotroller.signal

    const subsData = async () => {
      try {
        const response = await subServiceInstance.getSubsribers(channelId, abortSignal)
        console.log("this is the response from susbcribeComponent", response);
        if (isMounted && response) {
          setSubscribers(response)
        }


      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }

    }


    subsData();
    return () => {
      isMounted = false
      cotroller.abort()
    }
  }, [])
  return (
    <div>susbcribeComponent</div>
  )
}

export default SusbcribeComponent

