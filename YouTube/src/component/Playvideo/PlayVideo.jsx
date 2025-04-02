

import React, { useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import bire from '../../assets/bire.jpg'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect } from 'react'
import { API_KEY } from '../../data'
import { valueConverter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {
    const[appiData, setAppiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [comments, setComment] = useState([]);

    const fetchData = async()=>{
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(response=>response.json()).then(appiData=>setAppiData(appiData.items[0]));
    } 

    useEffect(()=>{
        fetchData();
    },[]);

    const fechChannel = async()=>{
        const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${appiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDetails_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]));


        const videoComment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(videoComment_url).then(response=>response.json()).then(data=>setComment(data.items));
    }

    useEffect(()=>{
        fechChannel();
    },[appiData])

  return (
       <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}

        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{appiData ? appiData.snippet.title : "title is here"}</h3>
        <div className="play-video-info">
            <p>{appiData?valueConverter(appiData.statistics.viewCount):"15k"} views &bull; {appiData?moment(appiData.snippet.publishedAt).fromNow():''}</p>
            <div>
                <span><img src={like} alt="" />{appiData?valueConverter(appiData.statistics.likeCount):'0'}</span>
                <span> <img src={dislike} alt="" />{appiData?valueConverter(appiData.statistics.unlikeCount):'0'}</span>
                <span> <img src={share} alt="" />share</span>
                <span> <img src={save} alt="" />save</span> 
           </div> 
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                 <p>{appiData?appiData.snippet.channelTitle:"channel titile here"}</p>
                <span>{channelData?valueConverter(channelData.statistics.subscriberCount):''}</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{appiData?appiData.snippet.description.slice(0,250):"description here"}</p>
            <p>subscribe to learn more!</p>
            <hr />
            <h4>{appiData?valueConverter(appiData.statistics.commentCount):'0'} comments</h4>
       



            {comments.map((comment, index)=>{
            return(
            <div key={index} className="comment">
                <img src = {comment.snippet.topLevelComment.snippet.authorProfileImageUrl?
                    comment.snippet.topLevelComment.snippet.authorProfileImageUrl:user_profile} alt="" />
                <div>
                    <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                    <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comments-action">
                        <img src={like} alt="" />
                        <span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" /><span>23</span>
                    </div>
              </div>
            </div>
            )
          

            })}
            
        </div>

    </div>
  )
}

export default PlayVideo