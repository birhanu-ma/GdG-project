
import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data'


const Recommended = ({categoryId}) => {
    const [recommended, setRecommended] = useState([]);

    const fetchData = async() => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(relatedVideo_url).then(response=>response.json()).then(data=>setRecommended(data.items));
    };

    useEffect(()=>{
        fetchData();
    },[categoryId]);


    
  return (
    <div className='recommend'>
        <div className="side-video-list">
          
            {recommended.map((video, index)=>{
                return (
                <div key={index}>
                <img src={recommended?video.snippet.thumbnails.medium.url:'thimbnails'} alt="" />
                 <div className="vid-info">
                     <h4>{recommended?video.snippet.title:'title space'}</h4>
                     <p>{recommended?video.snippet.channelTitle:'channelTitle space'}</p>
                 </div>
                </div>
                )
                })

            }
           
        </div>
    </div>
  )
}

export default Recommended