import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const jsonData = await data.json();
        setVideos(jsonData.items);
    };
    // console.log(videos[0].id.videoId);

    return (
        <div className="video-container">
            {videos.map((vid) => (
                <Link to={"/watch?v=" + vid.id.videoId}>
                    <VideoCard info={vid} key={vid.id.videoId} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
