// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { VideoPlayer,CommentSection,SuggesterVideos,PlaylistBar } from '../components/watchVideos'
// import { FilterBar } from '../components'


// function WatchPage() {
//   const{videoId} =useParams()
//   return (
//     <div className='flex p-5 flex-wrap'>
//     <div className='flex-3/4 flex-col gap-2'>
//       <VideoPlayer/>
//       <CommentSection/>

//     </div>

//     <div className=' flex-1/7 flex-col gap-2'>
//       <PlaylistBar/>
//       <SuggesterVideos/>
//       <FilterBar/>
//     </div>

//     </div>
//   )
// }

// export default WatchPage

import React from 'react'
import { useParams } from 'react-router-dom'
import { VideoPlayer, CommentSection, SuggesterVideos, PlaylistBar,VideoBellow } from '../components/watchVideos'
import { FilterBar } from '../components'


function WatchPage() {
  const { videoId } = useParams()

  return (
    <div className='flex flex-col lg:flex-row p-4 lg:p-6 text-white min-h-[calc(100vh-3.5rem)]'>
      
      <div className='flex flex-col w-full lg:w-[calc(100%_-_26rem)] 2xl:w-[calc(100%_-_30rem)] mr-0 lg:mr-6 space-y-4'>
        
        <VideoPlayer />
        <VideoBellow/>
        <CommentSection />
      </div>

      <div className='flex flex-col w-full lg:w-96 2xl:w-[28rem] mt-6 lg:mt-0 space-y-4'>

        <PlaylistBar/>

        <FilterBar /> 
        
        <SuggesterVideos />
        
      </div>

    </div>
  )
}

export default WatchPage

